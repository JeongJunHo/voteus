package com.ssafy.vote.dao;

import java.util.List;

import com.ssafy.vote.dto.VoteVO;

public interface IVoteDao {

	public List<VoteVO> getVoteAllList();
}
