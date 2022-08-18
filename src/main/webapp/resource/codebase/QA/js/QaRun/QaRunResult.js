//품질평가 이력
var QaRunnerResult = function() {
	 //평가 이력 조회
	  var QaRunlistSearchForm = {
	    view:"form",
	    css:"QaRunlistSearchForm",
	    elements:[
	      {	
	    	  cols:[
	    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
	    		  { view:"button", label:"search", align:"right"},
	    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1},
	    		  { view:"datepicker",  label:"평가월", value:new Date(), format:"%d  %M %Y", tooltip:"#label# #value#"},
			      { view:"richselect", label:"평가그룹", placeholder:"평가그룹 선택",tooltip:function(obj){
			        return obj.placeholder;
			      }}
	    	  ]
	      },
	      {
	    	  cols:[
	    		  { view:"text", placeholder:"", label:"사용자",css:{"line-height":"38px","height":"38px"}},
	    		  { view:"button", label:"search", align:"right"},
	    		  { view:"richselect", label:"진행상태", tooltip:function(obj){
				        return obj.placeholder;
			      }},
	    		  { view:"richselect", label:"평가시트", tooltip:function(obj){
				        return obj.placeholder;
			      }}
		      ]
	      },
	      {
	    	  cols:[
	    		  { view:"text", placeholder:"", label:"조직",css:{"line-height":"38px","height":"38px"}},
	    		  { view:"button", label:"search", align:"right"},
	    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1 ,css:"QAcheckbox"},
	    		  { view:"richselect", label:"상담유형", tooltip:function(obj){
				        return obj.placeholder;
			      }},
			      { view:"richselect", tooltip:function(obj){
				        return obj.placeholder;
			      }},
			      { view:"checkbox", labelRight:"퇴사자 제외", labelWidth:0, value:1 },
		      ]
	      }
	    ],
	    elementsConfig:{
	      labelWidth:100, labelAlign:"center"
	    }
	  }
	  
	  //평가대상자 목록
	  var QaRunGridResult = {
			   view:"datatable",
		       id:"QaRunGridResult",
		       css:"QaRunGridResult",
		       height:400,
		       columns:[
	 				{ id:"QAgroup", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true,footer:{textfilter:"합계"}},
	 				{ id:"csagId", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", header:"목표점수",fillspace:true,sort:"int"}, //목표점수 ,footer:{ content:"avgColumn"}
	 				{ id:"test7", header:"목표건수",fillspace:true,sort:"int"}, //목표건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test8", header:"임시저장건수",fillspace:true,sort:"int"}, //임시저장건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test9", header:"저장건수",fillspace:true,sort:"int"}, // 저장건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test10",header:"완료취소건수",fillspace:true,sort:"int"}, // 완료취소건수 ,footer:{ content:"avgC olumn"}
	 				{ id:"test11",header:"완료건수",fillspace:true,sort:"int"}, // 완료건수
	 				{ id:"test12",header:"완료율",fillspace:true,sort:"int"}, // 완료율 ,footer:{ content:"avgColumn"}
	 				{ id:"test13",header:"평균점수",fillspace:true,sort:"int"} // 평균점수 ,footer:{ content:"avgColumn"}
//	 				{ id:"votes",	header:"Votes", width:100, sort:"int",footer:{ content:"summColumn" }}
		       ],
	    	  data:"",
	    	  select:"row",
	    	  autoConfig:true,	    	  
	    	  footer:true,
			  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfo = this.getItem(id);
			        }
				  }
		     }
	  //평가 정보 목록
	  var QaRunGridResultInfo = {
			   view:"datatable",
		       id:"QaRunGridResultInfo",
		       css:"QaRunGridResultInfo",
		       height:200,
		       columns:[
	 				{ id:"test1", editor:"text" ,header: {text: "QAA", css:{"text-align":"center"}},fillspace:true,footer:{textfilter:"합계"}},
	 				{ id:"test2", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"IDMS", css:{"text-align":"center"}},fillspace:true}, 
	 				{ id:"test5", editor:"text" ,	header:{text:"점수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"평가상담유형", css:{"text-align":"center"}},fillspace:true},  //평가상담유형
	 				{ id:"test7", editor:"text" ,	header:{text:"상담일자", css:{"text-align":"center"}},fillspace:true},   //상담일자
	 				{ id:"test8", editor:"text" ,	header:{text:"저장일", css:{"text-align":"center"}},fillspace:true},//저장일
	 				{ id:"test9", editor:"text" ,	header:{text:"완료일", css:{"text-align":"center"}},fillspace:true},//완료일
	 				{ id:"test10",editor:"text" ,	header:{text:"진행단계", css:{"text-align":"center"}},fillspace:true},//진행단계
	 				{ id:"test11",editor:"text" ,	header:{text:"연습평가여부", css:{"text-align":"center"}},fillspace:true},//연습평가여부
	 				{ id:"test12",editor:"text" ,	header:{text:"우수콜", css:{"text-align":"center"}},fillspace:true},//우수콜
	 				{ id:"test13",editor:"text" ,	header:{text:"변경건수", css:{"text-align":"center"}},fillspace:true},//변경건수
	 				{ id:"test14",editor:"text" ,	header:{text:"평가시트상세", css:{"text-align":"center"}},fillspace:true}//평가시트상세
		       ],
	    	  data:"",
	    	  select:"row",
	    	  autoConfig:true,	    	  
	    	  footer:true,
			  on:{
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfo = this.getItem(id);
//			            console.log("QaRunGridInfo: ",QaRunGridInfo.csagId);
			        }
				  }
		     }
	  //평가 이력 상세정보
	  var QaRunGridResultDetailInfo = {
			   view:"datatable",
		       id:"QaRunGridResultDetailInfo",
		       css:"QaRunGridResultDetailInfo",
		       height:200,
		       columns:[
	 				{ id:"test1", editor:"text" ,header: {text: "순번", css:{"text-align":"center"}},fillspace:true,footer:{textfilter:"합계"}},
	 				{ id:"test2", editor:"text" ,	header:{text:"진행단계", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"사유", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"수정일", css:{"text-align":"center"}},fillspace:true}, 
	 				{ id:"test5", editor:"text" ,	header:{text:"수정자", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"조직", css:{"text-align":"center"}},fillspace:true}, 
	 			],
	    	  data:"",
	    	  select:"row",
	    	  autoConfig:true,	    	  
	    	  footer:true,
			  on:{
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfo = this.getItem(id);
//			            console.log("QaRunGridInfo: ",QaRunGridInfo.csagId);
			        }
				  }
		     }
	  //qa페이지 인풋 test
	  var QaRunGridResult = {
			   view:"datatable",
		       id:"QaRunGridResult",
		       css:"QaRunGridResult",
		       height:400,
		       columns:[
	 				{ id:"QAgroup", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true,footer:{textfilter:"합계"}},
	 				{ id:"csagId", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", header:"목표점수",fillspace:true,sort:"int"}, //목표점수 ,footer:{ content:"avgColumn"}
	 				{ id:"test7", header:"목표건수",fillspace:true,sort:"int"}, //목표건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test8", header:"임시저장건수",fillspace:true,sort:"int"}, //임시저장건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test9", header:"저장건수",fillspace:true,sort:"int"}, // 저장건수 ,footer:{ content:"avgColumn"}
	 				{ id:"test10",header:"완료취소건수",fillspace:true,sort:"int"}, // 완료취소건수 ,footer:{ content:"avgC olumn"}
	 				{ id:"test11",header:"완료건수",fillspace:true,sort:"int"}, // 완료건수
	 				{ id:"test12",header:"완료율",fillspace:true,sort:"int"}, // 완료율 ,footer:{ content:"avgColumn"}
	 				{ id:"test13",header:"평균점수",fillspace:true,sort:"int"} // 평균점수 ,footer:{ content:"avgColumn"}
//	 				{ id:"test13",header:"평균점수",fillspace:true,sort:"int"} 평균점수 ,footer:{ content:"avgColumn"}
		       ],
	    	  data:"",
	    	  select:"row",
	    	  autoConfig:true, 
	    	  footer:true,
			  on:{
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfo = this.getItem(id);
			        }
				  }
		     }
  //************************************************************************************************************************************************************************************************
	  var QaRunResult = webix.ui({
		  id:"QaRunResult",
		  container:"QaRunResult",
		  hidden:true,
		  rows:[
			{template: "<span class='t2'><br>평가이력조회</span>", height: 44},
			QaRunlistSearchForm,
			{template: "<span class='t2'><br>평가대상자 목록</span>", height: 44},
			QaRunGridResult,
			{template: "<span class='t2'><br>평가정보 목록</span>", height: 44},
			QaRunGridResultInfo,
			{template: "<span class='t2'><br>평가이력 상세정보</span>", height: 44},
			QaRunGridResultDetailInfo
		   ]
		 });
}
