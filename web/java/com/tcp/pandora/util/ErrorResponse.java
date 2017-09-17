package com.tcp.pandora.util;

public class ErrorResponse {
	private int errorNo = -1;
	private String message = "";
	
	public int getErrorNo() {
		return errorNo;
	}
	public void setErrorNo(int errorNo) {
		this.errorNo = errorNo;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
