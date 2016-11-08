package com.tcp.pandora.entity;

import java.time.LocalDate;

import com.tcp.pandora.util.RandStringBuilder;

public class Date {
	private String id = "";
	private String coupleId = "";
	private String days = "";
	private int publicCondtion = -1;
	private String thumbnail = "";
	
	public static Date of() {
		Date date = new Date();
		date.setId(RandStringBuilder.create(13));
		date.setCoupleId(RandStringBuilder.create(13));
		date.setDays(LocalDate.now().toString());
		date.setPublicCondtion((int)Math.random() % 5);
		date.setThumbnail(RandStringBuilder.create(30));
		
		return date;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCoupleId() {
		return coupleId;
	}
	public void setCoupleId(String coupleId) {
		this.coupleId = coupleId;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public int getPublicCondtion() {
		return publicCondtion;
	}
	public void setPublicCondtion(int publicCondtion) {
		this.publicCondtion = publicCondtion;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
}
