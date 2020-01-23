package com.ssafy.vote.dao;

import java.util.List;

import com.ssafy.vote.dto.VoteVO;

public interface IVoteDao {

	public List<VoteVO> getVoteAllList();
	public boolean insertVote(String name, String middlepart, String start, String end);
	public boolean delVote(int code);
	public boolean updateVote(int code, String name, String middlepart, String start, String end);

}
