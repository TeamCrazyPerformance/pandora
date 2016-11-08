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
	 * format ������ ������ ����
	 * d: �ҹ��� ���ĺ� (a~z)
	 * u: �빮�� ���ĺ� (A~Z)
	 * n: ���� (0~9)
	 * (�� �� �ٸ� ����): �Էµ� �״�� ���Եȴ�
	 * 
	 * ������� format�� dduunn �̶��,
	 * abCD12 ��� ���ڿ��� ������ �� �ִ�
	 * ���̴� format�� ���̿� ���� �����ȴ�
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
	
	public static void main(String[] args) {
		String s = RandStringBuilder.create("nn-nn-nn 00:00:00");
		System.out.println(s);
	}
}
