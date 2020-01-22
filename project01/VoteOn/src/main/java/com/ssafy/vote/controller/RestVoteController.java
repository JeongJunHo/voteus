package com.ssafy.vote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vote.dto.VoteVO;
import com.ssafy.vote.service.IVoteService;

import io.swagger.annotations.ApiOperation;

/*
create database voteon;
use voteon;

create table vote(
	code int auto_increment primary key,
    name varchar(200),
    middlepart varchar(200) not null,
    start datetime,
    end datetime
);

create table candidate(
	code int auto_increment primary key,
    name varchar(200),
    num varchar(100),
    party varchar(100),
    votecode int,
    pick int
);

create table voter(
	code int primary key,
    name varchar(200),
    area varchar(100)
);*/

@RestController
@RequestMapping("/api/vote")
public class RestVoteController {
	@Autowired
	private IVoteService ser;
	
	@ApiOperation(value="모든 투표 데이터를 조회합니다.")
	@GetMapping("/getVoteAllList")
	public ResponseEntity<List<VoteVO>> getVoteAllList(){
		ResponseEntity<List<VoteVO>> re = null;
		try {
			List<VoteVO> list = ser.getVoteAllList();
			for(int i=0; i<list.size(); i++) {
				System.out.println(list.get(i).toString());
			}
			re = new ResponseEntity<List<VoteVO>>(list, HttpStatus.OK);
		} catch(Exception e) {
			re = new ResponseEntity("모든 투표 데이터 조회 실패 문제가 생겼다!", HttpStatus.OK);
		}
		return re;
	}
	
	@ApiOperation(value="투표를 등록합니다.")
	@GetMapping("/insertVote")
	public ResponseEntity<String> insertVote(@RequestBody VoteVO vote){
		ResponseEntity<String> re = null;
		try {
			ser.addMem(mem.getId(), mem.getPw(), mem.getName(), mem.getAddr(), mem.getEmail(), mem.getTel(),
					mem.getAlinfo());
			re = new ResponseEntity<String>("잘 들어 갔어용~", HttpStatus.OK);
		} catch (Exception e) {
			// HttpStatus 통신은 제대로 된거니까 OK
			re = new ResponseEntity<String>("입력 실패 문제가 생겼다!", HttpStatus.OK);
		}
		return re;
	}
	
}
