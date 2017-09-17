package com.tcp.pandora.entity;

import java.time.LocalDate;
import java.util.Random;

import com.tcp.pandora.util.RandStringBuilder;

public class Couple {
	private String id = "";
	private String firstDay = "";
	private int type = -1;
	private int state = -1;
	private String userEmail1 = "";
	private String userEmail2 = "";
	
	public static Couple of() {
		Couple c = new Couple();
		c.setId(RandStringBuilder.create(13));
		c.setFirstDay(LocalDate.now().toString());
		Random r = new Random();
		c.setState(r.nextInt() % 5);
		c.setUserEmail1(RandStringBuilder.create("dddddd@naver.com"));
		c.setUserEmail2(RandStringBuilder.create("dddddd@naver.com"));
		
		return c;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstDay() {
		return firstDay;
	}
	public void setFirstDay(String firstDay) {
		this.firstDay = firstDay;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public String getUserEmail1() {
		return userEmail1;
	}
	public void setUserEmail1(String userEmail1) {
		this.userEmail1 = userEmail1;
	}
	public String getUserEmail2() {
		return userEmail2;
	}
	public void setUserEmail2(String userEmail2) {
		this.userEmail2 = userEmail2;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
}
