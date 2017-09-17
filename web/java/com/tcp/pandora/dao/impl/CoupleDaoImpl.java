package com.tcp.pandora.dao.impl;

import java.util.List;

import com.tcp.pandora.dao.CoupleDao;
import com.tcp.pandora.entity.Couple;
import com.tcp.pandora.vo.UserDetailVo;

public class CoupleDaoImpl extends GenericDaoImpl<Couple, String> implements CoupleDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

	@Override
	public List<Couple> findByEmail(String email) {
		return this.sqlSession.selectList(this.namespace + ".findByEmail", email);
	}

	@Override
	public List<UserDetailVo> findUserByEmail1(String email) {
		return this.sqlSession.selectList(this.namespace + ".findUserByEmail1", email);
	}

	@Override
	public List<UserDetailVo> findUserByEmail2(String email) {
		return this.sqlSession.selectList(this.namespace + ".findUserByEmail2", email);
	}
}