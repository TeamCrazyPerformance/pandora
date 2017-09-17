package com.tcp.pandora.web.exception;

public class ConflictedException extends Exception {
	private static final long serialVersionUID = 1L;
	private String errorMessage = "";
	
	public ConflictedException(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	public String getErrorMessage() {
		return errorMessage;
	}
}
