package com.WRITEME.dao;

import com.WRITEME.model.PostDTO;

public interface PostDAO {

	int newPost(PostDTO param) throws Exception;
}
