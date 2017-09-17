package com.tcp.pandora.util;

import java.util.Random;


public class RandStringBuilder {
	private static final char[] downAlphas;
	private static final char[] upAlphas;
	private static final char[] nums;
	private static final char[] chars;
	
	static {
		StringBuilder b = new StringBuilder();
		StringBuilder a = new StringBuilder();
		for (char ch='0'; ch<='9'; ch++) {
			b.append(ch);
			a.append(ch);
		}
		nums = b.toString().toCharArray();

		b.setLength(0);
		for (char ch='a'; ch<='z'; ch++) {
			b.append(ch);
			a.append(ch);
		}
		downAlphas = b.toString().toCharArray();
		
		b.setLength(0);
		for (char ch='A'; ch<='Z'; ch++) {
			b.append(ch);
			a.append(ch);
		}
		upAlphas = b.toString().toCharArray();
		chars = a.toString().toCharArray();
	}
	
	/**
	 * format 형식은 다음과 같다
	 * d: 소문자 알파벳 (a~z)
	 * u: 대문자 알파벳 (A~Z)
	 * n: 숫자 (0~9)
	 * (그 외 다른 문자): 입력된 그대로 삽입된다
	 * 
	 * 예를들어 format이 dduunn 이라면,
	 * abCD12 라는 문자열이 생성될 수 있다
	 * 길이는 format의 길이에 따라 생성된다
	 * 
	 * @param format
	 * @return
	 */
	public static String create(String format) {
		StringBuilder b = new StringBuilder();
		Random r = new Random();
		for (char c : format.toCharArray()) {
			switch(c) {
			case 'd':
				b.append(downAlphas[r.nextInt(downAlphas.length)]);
				break;
				
			case 'u':
				b.append(upAlphas[r.nextInt(upAlphas.length)]);
				break;
				
			case 'n':
				b.append(nums[r.nextInt(nums.length)]);
				break;
				
			default:
				b.append(c);
				break;
			}
		}
		
		return b.toString();
	}
	
	public static String create(int len) {
		StringBuilder b = new StringBuilder();
		Random r = new Random();
		for (int i=0; i<len; i++) {
			b.append(chars[r.nextInt(chars.length)]);
		}
		
		return b.toString();
	}
}
