package com.tcp.pandora.dao.impl;

import org.springframework.stereotype.Component;

import com.tcp.pandora.dao.UserDao;
import com.tcp.pandora.entity.User;

@Component
public class UserDaoImpl extends GenericDaoImpl<User, String> implements UserDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}
}