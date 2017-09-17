package com.tcp.pandora.service;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.javassist.NotFoundException;

import com.tcp.pandora.entity.User;


public interface UserService {
	public List<User> findAll();
	public List<User> findAll(HashMap<String, String> filter);
	public boolean joinUs(User user);
	public User findOne(String email);
	public boolean deleteOne(String email);
	public boolean updateOne(String email, User user) throws NotFoundException;
	public boolean askBeMyFriend(String sender, String receiver, int type) throws NotFoundException;
	public List<User> findAllRelation(HashMap<String, String> filter);
}
