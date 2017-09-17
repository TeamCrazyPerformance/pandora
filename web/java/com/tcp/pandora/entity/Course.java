package com.tcp.pandora.entity;

import java.util.Random;

import com.tcp.pandora.util.RandStringBuilder;

public class Course {
	private int nIndex = -1;
	private String dateId = "";
	private String coupleId = "";
	private int seqNum = -1;
	private String gps = "";
	private String title = "";
	private String location = "";
	private String contents = "";
	private int score = -1;
	private int price = -1;
	private String mainPhoto = "";
	private String photos = "";
	
	public static Course of() {
		Random r = new Random();
		Course c = new Course();
		c.setDateId(RandStringBuilder.create(13));
		c.setCoupleId(RandStringBuilder.create(13));
		c.setSeqNum(r.nextInt() % 5);
		c.setGps(RandStringBuilder.create(5));
		c.setLocation(RandStringBuilder.create(50));
		c.setContents(RandStringBuilder.create(100));
		c.setScore(r.nextInt() % 100);
		c.setPrice(r.nextInt() % 1000000);
		c.setMainPhoto(RandStringBuilder.create(20));
		c.setPhotos(RandStringBuilder.create(20));
		
		return c;
	}
	
	public int getnIndex() {
		return nIndex;
	}
	public void setnIndex(int nIndex) {
		this.nIndex = nIndex;
	}
	public String getDateId() {
		return dateId;
	}
	public void setDateId(String dateId) {
		this.dateId = dateId;
	}
	public String getCoupleId() {
		return coupleId;
	}
	public void setCoupleId(String coupleId) {
		this.coupleId = coupleId;
	}
	public int getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(int order) {
		this.seqNum = order;
	}
	public String getGps() {
		return gps;
	}
	public void setGps(String gps) {
		this.gps = gps;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getMainPhoto() {
		return mainPhoto;
	}
	public void setMainPhoto(String mainPhoto) {
		this.mainPhoto = mainPhoto;
	}
	public String getPhotos() {
		return photos;
	}
	public void setPhotos(String photo) {
		this.photos = photo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
}
