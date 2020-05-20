package com.WRITEME.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//키워드
public class KeywordsDTO {
	private int keywordID;
	private int categoryID;
	private String keywordName;
	private Date date; 
	private String time;
	
}
