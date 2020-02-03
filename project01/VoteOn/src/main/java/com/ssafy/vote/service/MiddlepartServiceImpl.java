package com.ssafy.vote.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.vote.dto.MiddlepartVO;

@Service
public class MiddlepartServiceImpl implements IMiddlepartService{

	@Override
	public List<MiddlepartVO> getMiddlepartAllList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean insertMiddlepart(String code, String name, String mainpart, String areaCode) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delMiddlepart(String code) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateMiddlepart(String code, String name, String mainpart, String areaCode) {
		// TODO Auto-generated method stub
		return false;
	}

}
