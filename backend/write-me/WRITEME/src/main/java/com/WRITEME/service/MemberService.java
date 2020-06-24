package com.WRITEME.service;

import com.WRITEME.domain.MemberVO;

public interface MemberService {
	public void register(MemberVO vo) throws Exception;
	public MemberVO login(MemberVO vo) throws Exception;
}
