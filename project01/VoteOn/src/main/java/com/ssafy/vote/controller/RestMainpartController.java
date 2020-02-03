package com.ssafy.vote.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vote.service.IMainpartService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/mainpart")
public class RestMainpartController {
	
	@Autowired
	IMainpartService ser;
	
	//인터페이스만 구현했음 쌍 m 구현하기
	

}
