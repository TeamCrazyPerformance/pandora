package com.tcp.pandora.dao.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.tcp.pandora.dao.CoupleDao;
import com.tcp.pandora.entity.Couple;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:/root-context.xml", "classpath:/mapper/*.xml", "classpath:/mybatis-config.xml"})
public class CoupleDaoImplTest {
	private static final Logger logger = LoggerFactory.getLogger(CoupleDaoImplTest.class);
	
	@Autowired
	private CoupleDao coupleDao = null;
	
	@Before
	public void setUp() {
		logger.info("-- setup test -- ");
		List<Couple> couples = Stream.generate(Couple::of).limit(30).collect(Collectors.toList());
		couples.stream().forEach(c -> {
			this.coupleDao.add(c);
		});
	}
	
	@After
	public void clean() {
		logger.info(" -- clean test -- ");
		List<Couple> couples = this.coupleDao.findAll();
		couples.stream().forEach(c -> {
			this.coupleDao.deleteOne(c.getId());
		});
	}
	
	public void deleteAndFind() {
		Couple c = Couple.of();
		this.coupleDao.add(c);
		logger.info("added id: " + c.getId());
		
		this.coupleDao.deleteOne(c.getId());
		Couple finded = this.coupleDao.findOne(c.getId());
		if (finded == null) {
			logger.info("delete test success");
		} else {
			logger.info("delete test fail");
		}
	}
	
	public void addAndFind() {
		Couple c = Couple.of();
		this.coupleDao.add(c);
		logger.info("added id: " + c.getId());
		
		Couple finded = this.coupleDao.findOne(c.getId());
		if (finded == null) {
			logger.info("add test fail");
		} else {
			logger.info("finded id: " + finded.getId());
		}
	}
	
	@Test
	public void findAll() {
		List<Couple> couples = this.coupleDao.findAll();
		couples.stream().forEach(c -> {
			logger.info("finded id: " + c.getId());
		});
	}
}
