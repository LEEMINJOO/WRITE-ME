package com.WRITEME.dao;

import java.util.List;

import com.WRITEME.model.KeywordsDTO;

public interface KeywordsDAO {
    List<KeywordsDTO> selectKeywords(KeywordsDTO param) throws Exception;
    List<KeywordsDTO> selectDistinctKeywords(KeywordsDTO param) throws Exception;
}
