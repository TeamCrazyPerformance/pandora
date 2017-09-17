package com.tcp.pandora.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Ahn
 * 
 * 사용자가 REST로 요청하면 서버에서 인증받은 코드를 검사한다
 */
public class AuthFilter implements Filter {
	private static final Logger logger = LoggerFactory.getLogger(AuthFilter.class);

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
	}

	@Override
	public void destroy() {
	}
}
