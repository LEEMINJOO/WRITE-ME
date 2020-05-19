package com.WRITEME.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userID;
	@Column
	private String userName;
	@Column
	@JsonIgnore
	private String userPW;

	public String getUsername() {
		return userName;
	}

	public void setUsername(String username) {
		this.userName = username;
	}

	public String getPassword() {
		return userPW;
	}

	public void setPassword(String password) {
		this.userPW = password;
	}

}

//userID varchar(20) PK 
//userPW varchar(20) 
//userName varchar(15)