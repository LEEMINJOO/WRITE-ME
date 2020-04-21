package com.WRITEME.dao;

import com.WRITEME.domain.MemberVO;

public interface MemberDAO {
	
	public void register(MemberVO vo) throws Exception;
	public MemberVO login(MemberVO vo) throws Exception;
}
