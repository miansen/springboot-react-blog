package com.tell;

import com.tell.bean.Page;
import com.tell.conf.properties.SiteConfig;
import com.tell.mapper.ArticleMapper;
import com.tell.model.*;
import com.tell.service.*;
import com.tell.util.StringUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {

	private Logger logger = LoggerFactory.getLogger(ApplicationTests.class);

	@Autowired
	private ArticleMapper articleMapper;

	@Autowired
	private ArticleService articleService;

	@Autowired
	private ThemeService themeService;

	@Autowired
	private UserService userService;

	@Autowired
	private SiteConfig siteConfig;

	@Autowired
	private StringUtil stringUtil;

	@Test
	public void pageByThemeName(){
		Page<Article> page = articleService.pageByThemeName(1, 20, "互联网资讯");
		System.out.println(page);
	}

	@Test
	public void pageByAuthor(){
		Page<Article> page = articleService.pageByAuthor(1, 20, "钱德虎");
		System.out.println(page);
	}


	@Test
	public void findById(){
		Article article = articleService.findById(765);
		System.out.println(article);
	}

	@Test
	public void findThemeAll(){
		List<Theme> list = themeService.findThemeAll(null, null);
		System.out.println(list);
	}

	@Test
	public void findUserByName(){
		User user = userService.findUserByName("钱德虎");
		System.out.println(user);
	}

	@Test
	public void findUserByArticleCountDesc(){
		List<User> list = userService.findUserByArticleCountDesc(0, 5);
		System.out.println(list);
	}

	@Test
	public void siteConfig(){
		String list = stringUtil.listToString(siteConfig.getCorsDomain(), ",");
		String[] array = siteConfig.getCorsDomain().toArray(new String[siteConfig.getCorsDomain().size()]);
		System.out.println(list);
		System.out.println(array);
	}

	@Test
	public void weight(){
		Article article = articleService.findById(1127);
		double weight = articleService.weight(article);
		System.out.println(weight);
	}

}
