package com.WRITEME.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.WRITEME.dao.PostDAO;
import com.WRITEME.model.PostDTO;

@RestController
@EnableAutoConfiguration
@MapperScan(basePackages = "com.WRITEME.dao")
public class PostController {

	@Autowired
	private PostDAO postDAO;
	
	@RequestMapping(value = "/api/post", method = RequestMethod.POST)
	public PostDTO post(PostDTO post) throws Exception{
		postDAO.newPost(post);
		return post;
	}
}
