package com.tcp.pandora.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tcp.pandora.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
	private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);
	private String authDomain = "";

	public void setAuthDomain(String authDomain) {
		this.authDomain = authDomain;
	}

	@Override
	public boolean verify(String authKey) {
		return true;
	}
}
