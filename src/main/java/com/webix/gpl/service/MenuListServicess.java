package com.webix.gpl.service;

import java.util.List;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.webix.gpl.dao.MenuMapper;
import com.webix.gpl.vo.callListVO;
import com.webix.gpl.vo.evaluationResultVO;

@Service
public class MenuListServicess {
	
	@Autowired
	MenuMapper menuMapper;
	
	private static final Logger logger = LoggerFactory.getLogger(MenuListServicess.class);
	
	public String getCallLists() {
		callListVO callListvo = new callListVO();
		List<callListVO> callListvoResp = menuMapper.getCallLists(callListvo);
		
		logger.debug("callList : {}",callListvoResp);
		
		ObjectMapper objectMapper= new ObjectMapper();
	    objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
	    
	    String arrayToJson;
		
	    try {
			arrayToJson = objectMapper.writeValueAsString(callListvoResp);
			logger.info("jsonParam  :",arrayToJson);
			return arrayToJson;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return "";
	}
	
	public String getEvaluationLists() {
		evaluationResultVO evaluationResultvo = new evaluationResultVO();
		List<evaluationResultVO> evaluationResp = menuMapper.getEvaluationResultVO(evaluationResultvo);
		
		logger.debug("evaluationResp : {}",evaluationResp);
		
		ObjectMapper objectMapper= new ObjectMapper();
	    objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
	    String arrayToJson;
		try {
			arrayToJson = objectMapper.writeValueAsString(evaluationResp);
			return arrayToJson;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return "";
	}
}
