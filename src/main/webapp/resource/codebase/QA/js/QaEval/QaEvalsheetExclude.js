//제외자 관리
var QaEvalsheetExclude = function() {
	 //조회 조건 폼
	  var QaEvalsheetExcludeform = {
		    view:"form",
		    id:"QaEvalsheetExcludeform",
		    css:"QaEvalsheetExcludeform",
		    elements:[
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"조직", tooltip:""},
		    		  { view:"button", label:"search",width:100},
		    		  { view:"checkbox", label:"하위포함", labelWidth:70, value:1},
		    		  { view:"datepicker",label:"평가일",labelWidth:100 ,view:"text" },
		    		  { view:"richselect",label:"사용자 레벨",options:["전체","상담사","관리자",],labelWidth:100 },
		    	  ]
		      },
		      //{view:"datepicker",  label:"평가월", value:new Date(), format:"%d  %M %Y", tooltip:"#label# #value#"},
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"사용자"},
		    		  { view:"button", label:"search",width:100},
		    		  { view:"richselect",label:"직급",placeholder:"직급 선택",options:["직급 선택","기타비상무이사","부회장","사장","전무","감사"],labelWidth:100 },
		    		  { view:"richselect",label:"직책",placeholder:"직책 선택",options:["직책 선택","간호상담사","부회장","대표이사","운영총괄"],labelWidth:100 },
	    		  ]
		      },
		      {
		          view:"radio",
		          label:"제외여부",
		          labelPosition:"right",
		          options:[
		            { id:"1", value:"전체품질평가제외자" }, 
		            { id:"2", value:"내부평가제외자" }, 
		            { id:"3", value:"본사평가제외자" }
		          ],
		          value:"1"
		        },
		    ],
		    elementsConfig:{
		      labelWidth:120, labelAlign:"left"
		    }
	  }
	  //조회 조건 테이블
	  var QaEvalsheetExcludelist = {
			   view:"datatable",
		       id:"QaEvalsheetExcludelist",
		       css:"QaEvalsheetExcludelist",
		       height:300,
		       columns:[
	 				{ id:"test1", editor:"text" ,header: {text: "순번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test2", editor:"text" ,	header:{text:"조직", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true},
		    	    { id:"test6", header:{ text:"전체품질평가제외", css:{"text-align":"center"}},fillspace:true, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
		    	    { id:"test7", header:{ text:"내부평가제외", css:{"text-align":"center"}},fillspace:true, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
		    	    { id:"test8", header:{ text:"본사평가제외", css:{"text-align":"center"}},fillspace:true, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
	 				
		    	    { id:"test9", editor:"text" ,	header:{text:"제외사유", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data:"",
	    	  select:"row",
			  on:{
			        "onItemClick":function(id, e, trg){ 
			        	console.log(id)
			        }
				  }
		     }
	//webix.ajax("//localhost:9889/callList").then(function(data){ css:{ "background-color":"#AFA","text-align":"center"}
	  var QaEvalsheetExcludes = webix.ui({
		  id:"QaEvalsheetExclude",
		  container:"QaEvalsheetExclude",
		  hidden:true,
		  header:"평가 제외자 관리",
		  rows:[
			{cols:[
				{template: "<span class='t3	'><br>조회 조건</span>", height: 54},
				{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
					console.log("조회버튼")
				}}
			]},
			QaEvalsheetExcludeform,
			QaEvalsheetExcludelist
		   ]
	 });
}
