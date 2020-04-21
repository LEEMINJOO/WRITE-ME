package com.WRITEME.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.WRITEME.dao.MemberDAO;
import com.WRITEME.domain.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Inject MemberDAO dao;
	
	@Override
	public void register(MemberVO vo) throws Exception {
		dao.register(vo);
	}

	@Override
	public MemberVO login(MemberVO vo) throws Exception {
		return dao.login(vo);
	}

}
