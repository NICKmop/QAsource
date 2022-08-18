package com.webix.gpl.vo;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import com.fasterxml.jackson.databind.ObjectMapper;

public class evaluationResultVO {
	private String test18;
	private String test17;
	private String test16;
	private String test15;
	private String test14;
	private String test13;
	private String test12;
	private String test11;
	private String test10;
	private String test9;
	private String test8;
	private String test7;
	private int test6;
	private String test5;
	private int test4;
	private int test3;
	private String test2;
	private int id;
	public String getTest18() {
		return test18;
	}
	public void setTest18(String test18) {
		this.test18 = test18;
	}
	public String getTest17() {
		return test17;
	}
	public void setTest17(String test17) {
		this.test17 = test17;
	}
	public String getTest16() {
		return test16;
	}
	public void setTest16(String test16) {
		this.test16 = test16;
	}
	public String getTest15() {
		return test15;
	}
	public void setTest15(String test15) {
		this.test15 = test15;
	}
	public String getTest14() {
		return test14;
	}
	public void setTest14(String test14) {
		this.test14 = test14;
	}
	public String getTest13() {
		return test13;
	}
	public void setTest13(String test13) {
		this.test13 = test13;
	}
	public String getTest12() {
		return test12;
	}
	public void setTest12(String test12) {
		this.test12 = test12;
	}
	public String getTest11() {
		return test11;
	}
	public void setTest11(String test11) {
		this.test11 = test11;
	}
	public String getTest10() {
		return test10;
	}
	public void setTest10(String test10) {
		this.test10 = test10;
	}
	public String getTest9() {
		return test9;
	}
	public void setTest9(String test9) {
		this.test9 = test9;
	}
	public String getTest8() {
		return test8;
	}
	public void setTest8(String test8) {
		this.test8 = test8;
	}
	public String getTest7() {
		return test7;
	}
	public void setTest7(String test7) {
		this.test7 = test7;
	}
	public int getTest6() {
		return test6;
	}
	public void setTest6(int test6) {
		this.test6 = test6;
	}
	public String getTest5() {
		return test5;
	}
	public void setTest5(String test5) {
		this.test5 = test5;
	}
	public int getTest4() {
		return test4;
	}
	public void setTest4(int test4) {
		this.test4 = test4;
	}
	public int getTest3() {
		return test3;
	}
	public void setTest3(int test3) {
		this.test3 = test3;
	}
	public String getTest2() {
		return test2;
	}
	public void setTest2(String test2) {
		this.test2 = test2;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public evaluationResultVO() {
		super();
	}
	
	public evaluationResultVO(String test18, String test17, String test16, String test15, String test14, String test13,
			String test12, String test11, String test10, String test9, String test8, String test7, int test6,
			String test5, int test4, int test3, String test2, int id) {
		super();
		this.test18 = test18;
		this.test17 = test17;
		this.test16 = test16;
		this.test15 = test15;
		this.test14 = test14;
		this.test13 = test13;
		this.test12 = test12;
		this.test11 = test11;
		this.test10 = test10;
		this.test9 = test9;
		this.test8 = test8;
		this.test7 = test7;
		this.test6 = test6;
		this.test5 = test5;
		this.test4 = test4;
		this.test3 = test3;
		this.test2 = test2;
		this.id = id;
	}
	public String toString() {
		ObjectMapper mapper = new ObjectMapper();
		try {
			String jsonStr = ToStringBuilder.reflectionToString(this,ToStringStyle.JSON_STYLE);
			Object jsonType = mapper.readValue(jsonStr, Object.class);
//			return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonType);
			return jsonStr;
		} catch (Exception e) {
			return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE);
		}
	}
}
