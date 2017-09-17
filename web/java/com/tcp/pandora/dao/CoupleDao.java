package com.tcp.pandora.dao;

import java.util.List;

import com.tcp.pandora.entity.Couple;
import com.tcp.pandora.vo.UserDetailVo;

public interface CoupleDao extends GenericDao<Couple, String> {
	public List<Couple> findByEmail(String eamil);
	public List<UserDetailVo> findUserByEmail1(String email);
	public List<UserDetailVo> findUserByEmail2(String email);
}
