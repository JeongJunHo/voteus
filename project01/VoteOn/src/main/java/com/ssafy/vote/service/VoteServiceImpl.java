package com.ssafy.vote.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vote.dao.IVoteDao;
import com.ssafy.vote.dto.VoteVO;

@Service(value="VoteServiceImpl")
public class VoteServiceImpl implements IVoteService {

	@Autowired
	IVoteDao man;
	
	public VoteServiceImpl() {}
	
	@Override
	public List<VoteVO> getVoteAllList() {
		return man.getVoteAllList();
	}


}
