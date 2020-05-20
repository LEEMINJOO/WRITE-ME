package com.WRITEME.controller;

import java.util.List;
import com.WRITEME.dao.KeywordsDAO;
import com.WRITEME.model.KeywordsDTO;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;





@RestController
@MapperScan(basePackages = "com.WRITEME.dao")
public class KeywordsController {
 
    @Autowired
    private KeywordsDAO keywordsDAO;
    
    @RequestMapping("api/posts/keyword")
    public List<KeywordsDTO> keywords(@RequestParam(value = "categoryID", defaultValue = "") int categoryID) 
    		throws Exception {
        final KeywordsDTO param = new KeywordsDTO(0, categoryID, null, null, null);
        final List<KeywordsDTO> keywordsList = keywordsDAO.selectKeywords(param);
        return keywordsList;
    }
    
}
