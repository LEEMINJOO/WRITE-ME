package com.WRITEME.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String userID;
	@Column
	private String userName;
	@Column
	@JsonIgnore
	private String userPW;

	
	
	public String getuserID() {
		return userID;
	}
	
	public String setuserID() {
		return userID;
	}
	
	public String getUsername() {
		return userName;
	}

	public void setUsername(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return userPW;
	}

	public void setPassword(String userPW) {
		this.userPW = userPW;
	}

}

//userID varchar(20) PK 
//userPW varchar(20) 
//userName varchar(15)