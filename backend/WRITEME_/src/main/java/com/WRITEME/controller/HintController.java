package com.WRITEME.controller;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.WRITEME.dao.HintDAO;
import com.WRITEME.model.HintDTO;

@RestController
@MapperScan(basePackages = "com.WRITEME.dao")
public class HintController {
 
    @Autowired
    private HintDAO hintDAO;
    
    @CrossOrigin
    @RequestMapping("api/posts/hint")
    public List<HintDTO> keywords(@RequestParam(value = "keywordID", defaultValue = "") int keywordID) 
    		throws Exception {
        final HintDTO param = new HintDTO(keywordID, 0, null);
        final List<HintDTO> hintList = hintDAO.selectHint(param);
        return hintList;
    }
    
}