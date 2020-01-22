package com.ssafy.vote.dto;

public class VoterVO {
	private int code;
	private String name;
	private String area;
	
	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getArea() {
		return area;
	}


	public void setArea(String area) {
		this.area = area;
	}


	public VoterVO() {
	}


	public VoterVO(int code, String name, String area) {
		super();
		this.code = code;
		this.name = name;
		this.area = area;
	}


	@Override
	public String toString() {
		return "VoterVO [code=" + code + ", name=" + name + ", area=" + area + "]";
	}
	
}
