package com.tcp.pandora.dao.impl;

import com.tcp.pandora.entity.Date;

public class DateDaoImpl extends GenericDaoImpl<Date, String> {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

}
