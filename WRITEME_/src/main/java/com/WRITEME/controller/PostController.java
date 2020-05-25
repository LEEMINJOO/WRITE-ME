package com.WRITEME.controller;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	
    @RequestMapping(value = "/api/post")
    public List<PostDTO> post(@RequestParam(value = "keywordID", defaultValue = "") int keywordID) 
    		throws Exception {
        /* TODO: 조회수 증가 */
        final PostDTO param = new PostDTO(0, null, null, null, keywordID, 0, null);
        //`postID`, `postTitle`, `postDetail`, `userID`, `keywordID`, `categoryID`, `date`
        final List<PostDTO> postList = postDAO.getPost(param);
        return postList;
    }
    
    
    
  /*  @RequestMapping("api/posts/keyword")
    public List<KeywordsDTO> keywords(@RequestParam(value = "categoryID", defaultValue = "") int categoryID) 
    		throws Exception {
        final KeywordsDTO param = new KeywordsDTO(0, categoryID, null, null, null);
        final List<KeywordsDTO> keywordsList = keywordsDAO.selectKeywords(param);
        return keywordsList;
    }*/
    
}
