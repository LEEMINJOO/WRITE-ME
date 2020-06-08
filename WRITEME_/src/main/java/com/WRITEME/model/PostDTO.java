package com.WRITEME.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PostDTO {
	private int postID;
	private String postTitle;
	private String postDetail;
	private String username;
	private int keywordID;
	private int categoryID;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;

}
