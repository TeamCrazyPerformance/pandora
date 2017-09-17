package com.tcp.pandora.dao;

import com.tcp.pandora.entity.User;

public interface UserDao extends GenericDao<User, String> {
	public User findByPhoneNum(String phoneNum);
}

