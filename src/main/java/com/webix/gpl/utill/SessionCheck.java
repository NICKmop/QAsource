package com.webix.gpl.utill;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SessionCheck {
	private static final Logger logger = LoggerFactory.getLogger(SessionCheck.class);
	
	HttpSession session;
	SessionCheck(HttpSession session){
		this.session = session;
	}
	public boolean isLogin() {
		if (session.getAttribute("login_id") != null) {
			return true;
		}
		return false;
	}
	
	public static boolean isLogin(HttpSession httpSession) {
		boolean result = false;
		@SuppressWarnings("unchecked")
		HashMap<String , String> adminVO = (HashMap<String, String>)httpSession.getAttribute("tdAdminMemberVO");
		if (adminVO != null && adminVO.get("login_id") != null) {
			//ip 체크
			logger.debug(adminVO.toString());
			return true;
		}
		logger.debug("isLogin => adminVO is null");
		return result;
	}
}
