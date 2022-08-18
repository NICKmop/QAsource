webix.ready(function(){
	var Qa = function() {
		webix.ui({
			id:"jqueryTest",
			type:"wide",
			rows: [
				{ view: "toolbar", padding:2, elements: [
					{ view: "button", type: "icon", icon: "mdi mdi-menu",
						width: 37, align: "left", css: "app_button", click: function(){
							$$("$sidebar1").toggle();
						}
					},
					{ view: "label", label: "QA"}
				]
				},
				{ cols:[
					{
						view: "sidebar",
						data: QpiMenuData,
						width: 200,
						on:{
							onAfterSelect: function(id){
//								webix.message(this.getItem(id).value)
								var item = this.getItem(id).value;
								console.log(item)
								QAitem(item);
							},
						}
					},
			        {
			          view:"resizer",
			        },
					{ template:
						//품질평가실행
						"<div id='QaRun'></div>"+
						"<div id='QaRunResult'></div>"+
						//품질평가 항목관리
						"<div id='QaEvalConsult'></div>"+
						"<div id='QaEvalsheetControl'></div>"+
						"<div id='QAAsetting'></div>" +
						"<div id='QaEvalsheetExclude'></div>"+
						"<div id='QaEvalGroupCenter'></div>"+
						"<div id='QaEvalGroupCompanys'></div>"+
						"<div id='QaaEvalDistributions'></div>",
						scroll:"auto"
					}
				]}
			]
		});
	};
	Qa();
	// 평가진행 -> 품질평가 실행
//	QaRunner();
	// 평가실행 -> 품질평가 이력
//	QaRunnerResult();
	// 품질관리 -> 평가항목관리
//	QaSetRe();
	// 품질관리 -> 평가시트 관리
//	QaEvalsheet();
	// 품질관리 -> 평가제외자 관리
//	QaEvalsheetExclude();
	// 품질관리 -> QAA설정
//	QAAsetting();
	//품질관리 -> 평가그룹관리센터
//	QaEvalGroupCenter();
	//품질관리 -> 평가그룹관리본사
//	QaEvalGroupCompany();
	//품질관리-> 평가분배
//	QaaEvalDistribution();
	//item 선택
	QAitem();
});
