package com.tell;

import com.tell.bean.Page;
import com.tell.conf.properties.SiteConfig;
import com.tell.mapper.ArticleMapper;
import com.tell.mapper.ChannelMapper;
import com.tell.model.*;
import com.tell.service.*;
import com.tell.util.StringUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
	private SiteService siteService;

	@Autowired
	private ThemeService themeService;

	@Autowired
	private UserService userService;

	@Autowired
	private ChannelMapper channelMapper;

	@Autowired
	private CrawlerHubService crawlerHubService;

	@Autowired
	private SiteConfig siteConfig;

	@Autowired
	private StringUtil stringUtil;

	@Test
	public void contextLoads() {
		Page<Article> page = articleService.pageByChannelName(1,20,"娱乐");
		logger.info(page.getContent().toString());
	}

	@Test
	public void findArticleByRand(){
		List<Article> list = articleMapper.findArticleByRand(0,20);
		System.out.println(list.size());
		System.out.println(list);
	}

	@Test
	public void countArticle(){
		int i = articleMapper.countArticle(null,null,null,null);
		System.out.println(i);
	}

	@Test
	public void pageByRand(){
		Page<Article> page = articleService.pageByRand(1, 20);
		System.out.println(page);
		System.out.println(page.getContent().size());
	}

	@Test
	public void pageByChannelName(){
		Page<Article> page = articleService.pageByChannelName(1, 20, "娱乐");
		System.out.println(page);
	}

	@Test
	public void pageByThemeName(){
		Page<Article> page = articleService.pageByThemeName(1, 20, "互联网资讯");
		System.out.println(page);
	}

	@Test
	public void pageBySiteName(){
		Page<Article> page = articleService.pageBySiteName(1, 20, "虎嗅网");
		System.out.println(page);
	}

	@Test
	public void pageByAuthor(){
		Page<Article> page = articleService.pageByAuthor(1, 20, "钱德虎");
		System.out.println(page);
	}

	@Test
	public void findArticleOderByDateDesc(){
		List<Article> list = articleService.findArticleOderByDateDesc(0, 10);
		System.out.println(list);
	}

	@Test
	public void findById(){
		Article article = articleService.findById(765);
		System.out.println(article);
	}

	@Test
	public void findSiteAll(){
		List<Site> list = siteService.findSiteAll(null,null);
		System.out.println(list);
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
	public void findbyChannelName(){
		Channel channel = channelMapper.findbyName("推荐");
		System.out.println(channel);
	}

	@Test
	public void findArticleOderByViewCountDesc(){
		List<Article> list = articleService.findArticleOderByViewCountDesc(5, 5);
		System.out.println(list);
	}

	@Test
	public void insertCrawlerHub(){
		CrawlerHub crawlerHub = new CrawlerHub();
		crawlerHub.setHubUrl("www.baidu.com");
		crawlerHub.setIndexUrl("www.baidu.com");
		crawlerHub.setArticleUrlSelector("a");
		crawlerHub.setTitleSelector("b");
		crawlerHub.setArticleAvatarImgSelector("c");
		crawlerHub.setAuthorSelector("d");
		crawlerHub.setArticleAvatarImgSelector("d");
		crawlerHub.setContentSelector("e");
		crawlerHub.setExcerptSelector("f");
		crawlerHub.setChannelName("g");
		crawlerHub.setThemeName("h");
		crawlerHub.setSiteName("i");
		crawlerHub.setCrawlerContent(false);
		crawlerHubService.insertCrawlerHub(crawlerHub);
	}

	@Test
	public void findArticleBySiteList(){
		List<Article> list = articleMapper.findArticleInSite( 0, 20);
		System.out.println(list);
	}

	@Test
	public void countInSite(){
		int i = articleMapper.countInSite();
		System.out.println(i);
	}

	@Test
	public void pageInSite(){
		Page<Article> page = articleService.pageInSite(1, 20);
		System.out.println(page);
	}

	@Test
	public void findAuthorOtherArticle(){
		List<Article> list = articleMapper.findAuthorOtherArticle("中国基金报", 946, 0, 10);
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
