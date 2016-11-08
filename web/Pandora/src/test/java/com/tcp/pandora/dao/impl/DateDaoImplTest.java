package com.tcp.pandora.dao.impl;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.tcp.pandora.entity.Date;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:/root-context.xml", "classpath:/mapper/*.xml", "classpath:/mybatis-config.xml"})
public class DateDaoImplTest {
	private static final Logger logger = LoggerFactory.getLogger(DateDaoImplTest.class);
	
	@Autowired
	private DateDaoImpl dateDao = null;
	
	@Before
	public void setUp() {
		logger.info("-- init DateDaoImplTest -- ");
	}
	
	@After
	public void clean() {
		logger.info("-- Finish DateDaoImplTest -- ");
	}
	
	@Test
	public void deleteOne() {
		List<Date> dates = this.dateDao.findAll();
		logger.info("before delete all");
		dates.stream().forEach(d -> {
			logger.info(d.getId());
			this.dateDao.deleteOne(d.getId());
		});
		
		logger.info("after delete all");
		List<Date> ds = this.dateDao.findAll();
		ds.stream().forEach(d -> {
			logger.info(d.getId());
		});
	}
	
	public void addAndFindOne() {
		Date date = Date.of();
		logger.info("added date id: " + date.getId());
		this.dateDao.add(date);
		Date finded = this.dateDao.findOne(date.getId());
		logger.info("finded date id: " + finded.getId());
	}
	
	
	public void findAll() {
		List<Date> dates = this.dateDao.findAll();
		dates.stream().forEach(vo -> {
			System.out.println(vo.getId());
		});
	}
}
