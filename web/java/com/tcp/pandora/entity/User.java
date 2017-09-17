package com.tcp.pandora.entity;

import java.time.LocalDate;
import java.util.Random;

import com.tcp.pandora.util.RandStringBuilder;

public class User {
	private String email = "";
	private String password = "";
	private String name = "";
	private String registerDate = "";
	private boolean gender = false;
	private String profilePhoto = "";
	private String bgPhoto = "";
	private String phoneNum = "";
	private String photos = "";
	
	public static User of() {
		User u = new User();
		u.setEmail(RandStringBuilder.create("dddddd@naver.com"));
		u.setPassword(RandStringBuilder.create(12));
		u.setName(RandStringBuilder.create("udd dddd-ddddd"));
		u.setRegisterDate(LocalDate.now().toString());
		
		Random r = new Random();
		if (r.nextInt() % 2 == 0) {
			u.setGender(true);
		} else {
			u.setGender(false);
		}
		
		if (r.nextInt() % 2 == 0) {
			u.setProfilePhoto(RandStringBuilder.create(15));
		}
		
		if (r.nextInt() % 2 == 0) {
			u.setBgPhoto(RandStringBuilder.create(17));
		}
		
		u.setPhoneNum(RandStringBuilder.create("nnn-nnn-nnn"));
		
		return u;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(String registerDate) {
		this.registerDate = registerDate;
	}
	public boolean getGender() {
		return gender;
	}
	public void setGender(boolean gender) {
		this.gender = gender;
	}
	public String getProfilePhoto() {
		return profilePhoto;
	}
	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}
	public String getBgPhoto() {
		return bgPhoto;
	}
	public void setBgPhoto(String bgPhoto) {
		this.bgPhoto = bgPhoto;
	}
	public String getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
	public String getPhotos() {
		return photos;
	}
	public void setPhotos(String photos) {
		this.photos = photos;
	}
}
