package com.WRITEME.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.WRITEME.dao.BoardDAO;
import com.WRITEME.domain.BoardVO;
import com.WRITEME.service.BoardService;

@Controller
@RequestMapping("/board/*")
public class BoardController {

 @Inject
 private BoardService service;

 @RequestMapping(value = "/list", method = RequestMethod.GET)
 public void getList(Model model) throws Exception {
  
  List<BoardVO> list = null;
  list = service.list();
  model.addAttribute("list", list);
 }
}