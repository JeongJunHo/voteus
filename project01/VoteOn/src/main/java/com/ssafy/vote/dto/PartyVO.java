package com.ssafy.vote.dto;

public class PartyVO {
	private String p_party;
	private String p_name;
	public String getP_party() {
		return p_party;
	}
	public void setP_party(String p_party) {
		this.p_party = p_party;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public PartyVO(String p_party, String p_name) {
		super();
		this.p_party = p_party;
		this.p_name = p_name;
	}
	public PartyVO() {
	}
	@Override
	public String toString() {
		return "PartyVO [p_party=" + p_party + ", p_name=" + p_name + "]";
	}
	
}
