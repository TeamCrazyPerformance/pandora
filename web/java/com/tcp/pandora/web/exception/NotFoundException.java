package com.tcp.pandora.web.exception;

public class NotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private String errorMessage = "";
	
	public NotFoundException(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public NotFoundException() {
		super();
	}
	public String getErrorMessage() {
		return errorMessage;
	}
}
