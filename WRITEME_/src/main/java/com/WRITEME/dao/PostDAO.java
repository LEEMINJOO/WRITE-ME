//게시물 등록, 호출
package com.WRITEME.dao;

import java.util.List;

import com.WRITEME.model.PostDTO;

public interface PostDAO {

	int newPost(PostDTO param) throws Exception;
	PostDTO getPost(PostDTO param) throws Exception;
    List<PostDTO> getPostbyKeywordID(PostDTO param) throws Exception;
    int editPost(PostDTO param) throws Exception;

}
