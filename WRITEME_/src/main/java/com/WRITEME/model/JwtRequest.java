package com.WRITEME.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
	private String userName;
	private String userPW;
	
	//need default constructor for JSON Parsing
	public JwtRequest()
	{
		
	}

	public JwtRequest(String userName, String userPW) {
		this.setUsername(userName);
		this.setPassword(userPW);
	}

	public String getUsername() {
		return this.userName;
	}

	public void setUsername(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return this.userPW;
	}

	public void setPassword(String userPW) {
		this.userPW = userPW;
	}
}
