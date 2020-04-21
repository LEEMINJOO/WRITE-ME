package com.WRITEME.domain;

import java.util.Date;

public class BoardVO {

	private int postID;
	private String postTitle;
	private String postDetail;
	private String userID;
	private int keywordID;
	private int categoryID;
	private Date date;
	
	
	public int getPostID() {
		return postID;
	}
	public void setPostID(int postID) {
		this.postID = postID;
	}
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	public String getPostDetail() {
		return postDetail;
	}
	public void setPostDetail(String postDetail) {
		this.postDetail = postDetail;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public int getKeywordID() {
		return keywordID;
	}
	public void setKeywordID(int keywordID) {
		this.keywordID = keywordID;
	}
	public int getCategoryID() {
		return categoryID;
	}
	public void setCategoryID(int categoryID) {
		this.categoryID = categoryID;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	} 
	
}
