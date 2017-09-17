package com.tcp.pandora.web.exception;

public class BadRequestException extends Exception {

	private static final long serialVersionUID = 1L;
	private String errorMessage = "";
	
	public BadRequestException(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
}
