package com.tcp.pandora.dao.impl;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.tcp.pandora.dao.GenericDao;

public abstract class GenericDaoImpl<VoType, PkType> implements GenericDao<VoType, PkType> {
	protected static final Logger logger = LoggerFactory.getLogger(GenericDaoImpl.class);
	protected String namespace = "";
	public abstract void setNamespace(String namespace);
	
	protected SqlSession sqlSession = null;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public int add(VoType vo) {
		return this.sqlSession.insert(this.namespace + ".add", vo);
	}
	
	@Override
	public List<VoType> findAll() {
		return this.sqlSession.selectList(this.namespace + ".findAll");
	}
	
	@Override
	public VoType findOne(PkType pk) {
		return this.sqlSession.selectOne(this.namespace + ".findOne", pk);
	}
	
	@Override
	public int update(HashMap<String, Object> map) {
		return this.sqlSession.update(this.namespace + ".update", map);
	}
	
	@Override
	public int deleteOne(PkType pk) {
		return this.sqlSession.delete(this.namespace + ".deleteOne", pk);
	}
	
	@Override
	public int count() {
		return 0;
	}
}
