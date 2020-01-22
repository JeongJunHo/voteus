package com.ssafy.vote.service;

import java.util.List;

import com.ssafy.vote.dto.VoteVO;

public interface IVoteService {
	/**
	 * @author : 선한빛
	 * 기능 : 모든 투표 데이터를 조회하는 메소드
	 * @Date : 2020. 1. 22.
	 */
	public List<VoteVO> getVoteAllList();
	/**
	 * @author : 선한빛
	 * 기능 : 투표를 등록하는 함수
	 * @Date : 2020. 1. 22.
	 */
	public boolean insertVote(String name, String middlepart, String start, String end);
}
