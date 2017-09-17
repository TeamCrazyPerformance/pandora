package com.tcp.pandora.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.tcp.pandora.service.AuthService;

/**
 * @author Ahn
 * 로그인을 제외한 모든 Uri에 적용된다. 인증방식은 구현된 AuthService에 의존한다
 */
public class AuthInterceptor extends HandlerInterceptorAdapter {
	private static final Logger logger = LoggerFactory.getLogger(AuthInterceptor.class);
	
	@Autowired
	private AuthService authService = null;
	
	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object handler) {
		String authKey = req.getParameter("authKey").trim();
		if ("".equals(authKey)) 
			return true;
		
		boolean isAuthorized = this.authService.verify(authKey);
		return isAuthorized;
	}
}
