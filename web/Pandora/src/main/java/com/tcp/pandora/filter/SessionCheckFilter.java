package com.tcp.pandora.filter;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SessionCheckFilter implements Filter {
	private static final Logger logger = LoggerFactory.getLogger(SessionCheckFilter.class);
	private Set<String> allowUrlSet = null;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String[] allowUrls = filterConfig.getInitParameter("allowUrls").split(",");
		this.allowUrlSet = new HashSet<String>();
		for (String url : allowUrls) {
			this.allowUrlSet.add(url.trim());
		}
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest hsReq = (HttpServletRequest)request;
		HttpServletResponse hsRsp = (HttpServletResponse)response;
		
		String reqUrl = hsReq.getRequestURI();
		boolean isAllowUrl = this.isAllowUrl(reqUrl);
		
		// if request uri is restricted, check the session
		if (isAllowUrl == false) {
			HttpSession ss = hsReq.getSession();
		}
		
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() { }
	
	private boolean isAllowUrl(String url) {
		boolean isAllowed = false;
		if (this.allowUrlSet.contains(url)) {
			isAllowed = true;
		}
		
		return isAllowed;
	}
}
