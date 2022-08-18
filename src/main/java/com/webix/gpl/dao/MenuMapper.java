package com.webix.gpl.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.webix.gpl.vo.callListVO;
import com.webix.gpl.vo.evaluationResultVO;

@Repository
public interface MenuMapper {
	
//	public callListVO getCallList(callListVO callListVo);
	//콜 리스트
	public List<callListVO> getCallLists(callListVO callListvo);
	//평가 결과 조회
	public List<evaluationResultVO> getEvaluationResultVO(evaluationResultVO evaluationResultVO);
	
}
