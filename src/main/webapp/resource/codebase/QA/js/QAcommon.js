var webixAjaxCommon = function(url, id) {
	webix.ajax(url).then(function(data){
		var arr = data.text();
		$$(id).parse(arr);
	});
}

var QAitem = function(item) {
	//품질평가관리 -> 평가항목관리
	if(item == "평가항목 관리"){
		// 품질관리 -> 평가항목관리
		QaSetRe();
		$$("QaEvalConsult").show();
	}else{
		$$("QaEvalConsult").hide();
	}
	
	//품질평가관리 -> 평가시트 관리
	if (item == "평가시트 관리") {
		// 품질관리 -> 평가시트 관리
		QaEvalsheet();
		$$("QaEvalsheetControl").show();
	}else{
		$$("QaEvalsheetControl").hide();
	}
	
	//품질평가관리 -> 평가그룹 관리-센터 QaEvalGroupCompanys
	if(item == "평가그룹 관리-센터"){
		//품질관리 -> 평가그룹관리센터
		QaEvalGroupCenter();
		$$("QaEvalGroupCenter").show();
	}else{
		$$("QaEvalGroupCenter").hide();
	}
	
	//품질평가관리 -> 평가그룹 관리-본사
	if(item == "평가그룹 관리-본사"){
		//품질관리 -> 평가그룹관리본사
		QaEvalGroupCompany();
		$$("QaEvalGroupCompanys").show();
	}else{
		$$("QaEvalGroupCompanys").hide();
	}
	
	//품질평가관리 -> QAA설정
	if (item == "QAA설정") {
		// 품질관리 -> QAA설정
		QAAsetting();
		$$("QAAsetting").show();
	}else{
		$$("QAAsetting").hide();
	}
	
	//품질평가관리 -> 평가제외자관리
	if (item == "평가 제외자 관리") {
		// 품질관리 -> 평가제외자 관리
		QaEvalsheetExclude();
		$$("QaEvalsheetExclude").show();
	}else{
		$$("QaEvalsheetExclude").hide();
	}
	
	//품질평가관리 -> 평가 분배
	if (item == "평가분배") {
		//품질관리-> 평가분배
		QaaEvalDistribution();
		$$("QaaEvalDistributions").show();
	}else{
		$$("QaaEvalDistributions").hide();
	}

//***********************************************************************	
	//평가실행 -> 품질평가 실행 QaRunResult
	if(item == "품질평가 실행"){
		// 평가진행 -> 품질평가 실행
		QaRunner();
		$$("QaRun").show();
	}else{
		$$("QaRun").hide();
	}
	
	//평가실행 -> 품질평가 이력 
	if(item == "품질평가 이력"){
		// 평가실행 -> 품질평가 이력
		QaRunnerResult();
		$$("QaRunResult").show();
	}else{
		$$("QaRunResult").hide();
	}

}
//QA 목록 리스트
//function QAitem(item) {
	//품질평가관리 -> 평가항목관리
//	if(item == "평가항목 관리"){
//		$$("QaEvalConsult").show();
//	}else{
//		$$("QaEvalConsult").hide();
//	}
//	평가실행 -> 품질평가 실행
//	if(item == "품질평가 실행"){
//		$$("QaRun").show();
//	}else{
//		$$("QaRun").hide();
//	}
//}
//function webixAjaxCommon(url,id) {
//webix.ajax(url).then(function(data){
//	var arr = data.text();
//	$$(id).parse(arr);
//});
//}