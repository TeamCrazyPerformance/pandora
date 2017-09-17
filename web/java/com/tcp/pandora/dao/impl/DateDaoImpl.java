package com.tcp.pandora.dao.impl;

import com.tcp.pandora.dao.DateDao;
import com.tcp.pandora.entity.Date;

public class DateDaoImpl extends GenericDaoImpl<Date, String> implements DateDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

}
