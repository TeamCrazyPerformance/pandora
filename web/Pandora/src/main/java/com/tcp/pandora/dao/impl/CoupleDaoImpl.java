package com.tcp.pandora.dao.impl;

import com.tcp.pandora.dao.CoupleDao;
import com.tcp.pandora.entity.Couple;

public class CoupleDaoImpl extends GenericDaoImpl<Couple, String> implements CoupleDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

}
