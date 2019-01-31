package com.tuzixinwen.util;

import com.tuzixinwen.conf.properties.JwtConfig;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: miansen
 * @Date: 2018/11/17 13:23
 */
@Component
public class JwtTokenUtil {

    private static final String CLAIM_KEY_USERNAME = "sub"; //该JWT所面向的用户
    private static final String CLAIM_KEY_CREATED = "created"; //该JWT所创建的时间

    @Autowired
    private JwtConfig jwtConfig;

    //生成到期时间
    private Date generateExpirationDate(){
        return new Date(System.currentTimeMillis() + jwtConfig.getExpiration() * 1000);
    }

    //生成Token
    private String generateToken(Map<String,Object> claims){
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(generateExpirationDate())
                .signWith(SignatureAlgorithm.HS512,jwtConfig.getSecret())
                .compact();
    }

    //添加自定义属性并生成Token
    public String generateToken(String username){
        Map<String,Object> claims = new HashMap<>();
        claims.put(CLAIM_KEY_USERNAME,username);
        claims.put(CLAIM_KEY_CREATED,new Date());
        return generateToken(claims);
    }

    //解码
    private Claims getClaimsFromToken(String token){
        Claims claims = null;
        try {
            claims = Jwts.parser()
                    .setSigningKey(jwtConfig.getSecret())
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return claims;
    }

    //刷新token
    public String refreshToken(String token){
        String refreshedToken = null;
        try {
            final Claims claims = getClaimsFromToken(token);
            claims.put(CLAIM_KEY_CREATED,new Date());
            refreshedToken = generateToken(claims);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return refreshedToken;
    }

    //获取该JWT所面向的用户
    public String getUsernameFromToken(String token){
        String username = null;
        try {
            Claims claims = getClaimsFromToken(token);
            username = claims.getSubject();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return username;
    }

    //获取该JWT所创建的时间
    private Date getCreatedDateFromToken(String token){
        Date created = null;
        try {
            Claims claims = getClaimsFromToken(token);
            created = new Date((Long) claims.get(CLAIM_KEY_CREATED));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return created;
    }

    //获取该JWT所失效的时间
    private Date getExpirationDateFromToken(String token){
        Date expiration = null;
        try {
            Claims claims = getClaimsFromToken(token);
            expiration = claims.getExpiration();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return expiration;
    }

    //token是否过期 true:是 false:否
    private Boolean isTokenExpired(String token){
        Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //token的创建时间是否大于重置时间
    private Boolean isCreatedBeforeLastPasswordReset(Date created, Date lastPasswordReset){
        return (lastPasswordReset != null && created.before(lastPasswordReset));
    }

    //验证token
    public boolean validateToken(String token){
        Claims claims = getClaimsFromToken(token);
        Date created = getCreatedDateFromToken(token);
        Date expiration = getExpirationDateFromToken(token);
        return (
                claims != null
                        && !isTokenExpired(token)
                        && isCreatedBeforeLastPasswordReset(created,expiration)
        );
    }
}
