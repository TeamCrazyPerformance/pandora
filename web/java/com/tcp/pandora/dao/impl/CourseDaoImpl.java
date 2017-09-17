package com.tcp.pandora.dao.impl;

import com.tcp.pandora.dao.CourseDao;
import com.tcp.pandora.entity.Course;

public class CourseDaoImpl extends GenericDaoImpl<Course, Integer> implements CourseDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}
}
