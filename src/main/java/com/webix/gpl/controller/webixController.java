package com.webix.gpl.controller;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webix.gpl.service.MenuListServicess;
import com.webix.gpl.utill.SessionCheck;
import com.webix.gpl.vo.callListVO;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class webixController {
	
	private static final Logger logger = LoggerFactory.getLogger(SessionCheck.class);
	@Autowired
	MenuListServicess menuservice;
	
	@GetMapping("/")
	public String webixIndex(){
		try {
			logger.info("callListses : {}",menuservice.getCallLists());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "/index";
	}
	@GetMapping("/QaPage")
	public String tesTwebixIndex(){
		try {
			
			logger.info("QaPage");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "/QaPage";
	}
	
	@ResponseBody
	@RequestMapping("/callList")
	public String getCallList(HttpServletRequest request) {
		return menuservice.getCallLists();
	}
	
	@ResponseBody
	@RequestMapping("/EvaluationResult")
	public String getEvaluationResult(HttpServletRequest request) {
		return menuservice.getEvaluationLists();
	}
}
