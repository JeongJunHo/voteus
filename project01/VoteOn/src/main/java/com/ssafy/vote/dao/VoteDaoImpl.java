package com.ssafy.vote.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.vote.dto.VoteVO;

@Repository
public class VoteDaoImpl implements IVoteDao{

	@Autowired
	SqlSession session;
	
	@Override
	public List<VoteVO> getVoteAllList() {
		return session.selectList("vote.getVoteAllList");
	}

}
