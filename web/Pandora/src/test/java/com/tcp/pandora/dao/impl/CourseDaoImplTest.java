package com.tcp.pandora.dao.impl;

import java.util.List;
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

import com.tcp.pandora.dao.CourseDao;
import com.tcp.pandora.entity.Course;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/root-context.xml", "classpath:/mapper/*.xml","classpath:/mybatis-config.xml" })
public class CourseDaoImplTest {
	private static final Logger logger = LoggerFactory.getLogger(CoupleDaoImplTest.class);

	@Autowired
	private CourseDao courseDao = null;

	@Before
	public void setUp() {
		logger.info(" -- test setup -- ");
		Stream.generate(Course::of).limit(30).forEach(c -> {
			this.courseDao.add(c);
		});
	}

	@After
	public void clean() {
		
	}
	
	@Test
	public void addAndDelete() {
		this.courseDao.findAll().stream().forEach(c -> {
			this.courseDao.deleteOne(c.getnIndex());
		});
	}
	
	public void findAll() {
		List<Course> courseList = this.courseDao.findAll();
		courseList.stream().forEach(c -> {
			logger.info("finded id: " + c.getnIndex());
		});
	}

	public void addAndFind() {
		Course c = Course.of();
		c.setnIndex(30);
		this.courseDao.add(c);
		logger.info("added id: " + c.getnIndex());
		
		Course finded = this.courseDao.findOne(c.getnIndex());
		if (finded == null) {
			logger.info("addAndFind Test fail");
		} else {
			logger.info("finded id: " + c.getnIndex());
		}
	}
}
