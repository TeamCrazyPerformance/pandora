package com.tcp.pandora.util;

import javax.inject.Inject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:/root-context.xml"})
public class SqlSessionFactoryTest {
	private static final Logger logger = LoggerFactory.getLogger(SqlSessionFactoryTest.class);
	
	private SqlSessionFactoryBean sqlSessionFactory = null;
	
	
	@Test
	public void connectSession() {
		try {
			logger.info("-- connect session start -- ");
			this.sqlSessionFactory.getObject().openSession();
		} catch (Exception e) {
			logger.info("fail to connect sql session factory");
			this.logger.error(e.getMessage());
		}
		
		logger.info("success to connect sql session factory");
	}
}
