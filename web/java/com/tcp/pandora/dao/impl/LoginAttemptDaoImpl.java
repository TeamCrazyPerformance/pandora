package com.tcp.pandora.dao.impl;

import com.tcp.pandora.dao.LoginAttemptDao;
import com.tcp.pandora.entity.LoginAttempt;

public class LoginAttemptDaoImpl extends GenericDaoImpl<LoginAttempt, String> implements LoginAttemptDao {

	@Override
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

}
