//평가 분배
var QaaEvalDistribution = function() {
	 //조회 폼
	  var QaaEvalDistributionform = {
		    view:"form",
		    id:"QaaEvalDistributionform",
		    elements:[
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
		    		  { view:"button", label:"search",width:100},
		    		  { view:"checkbox", label:"하위포함", labelWidth:70, value:1},
		    		  { view:"datepicker",label:"평가일",labelWidth:100 ,view:"text" },
					  { lavel: "평가그룹", view:"richselect" },

		    	  ]
		      },
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"등록일자"},
		    		  { view:"text", label:"등록/변경자", align:"right"}
	    		  ]
		      }
		    ],
		    elementsConfig:{
		      labelWidth:120, labelAlign:"left"
		    }
	  }
	  //데이터 테이블 
	  var QaaEvalDistributionUserlist = {
			   view:"datatable",
		       id:"QaaEvalDistributionUserlist",
		       css:"QaaEvalDistributionUserlist",
		       height:300,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
	 				{ id:"test1", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test2", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"QAA", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test7", editor:"text" ,	header:{text:"분배건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"분배자", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"분배일자", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"평가진행건수", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data:"",
	    	  select:"row",
	    	  footer:true,
			  on:{
			        "onItemClick":function(id, e, trg){ 
			        	console.log(id)
			        }
				  }
		     }
	  var QaaEvalDistributionQaalist = {
			  view:"datatable",
		       id:"QaaEvalDistributionQaalist",
		       css:"QaaEvalDistributionQaalist",
		       height:300,
		       columns:[
	 				{ id:"test1", editor:"text" ,header: {text: "", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test2", editor:"text" ,	header:{text:"QAA", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"건수", css:{"text-align":"center"}},fillspace:true}		       ],
	    	  data:"",
	    	  select:"row",
	    	  footer:true,
			  on:{
			        "onItemClick":function(id, e, trg){ 
			        	console.log(id)
			        }
				  }
	  }
	  //Qaa분배 리스트
	  var QaaRandomDistribution = {
		  view:"datatable",
	       id:"QaaRandomDistribution",
	       css:"QaaRandomDistribution",
	       height:200,
	       columns:[
	    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
 				{ id:"test1", editor:"text" ,header: {text: "이름", css:{"text-align":"center"}},fillspace:true},
 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true}
			],
    	  data:"",
    	  select:"row",
    	  footer:true,
		  on:{
	        "onItemClick":function(id, e, trg){ 
	        	console.log(id)
	        }
		  }
	  }
	  var QaaRandomDisDistribution = {
			  view:"datatable",
		       id:"QaaRandomDisDistribution",
		       css:"QaaRandomDisDistribution",
		       height:200,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
	 				{ id:"test1", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test2", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"분배건수", css:{"text-align":"center"}},fillspace:true}
				],
	    	  data:"",
	    	  select:"row",
	    	  footer:true,
			  on:{
		        "onItemClick":function(id, e, trg){ 
		        	console.log(id)
		        }
			  }
		  }
	  //일괄분배
	  var QaaDistributionForm = {
			  view:"form",
			  elementsConfig:{ labelWidth: 140, labelAlign:"center" },
			  css :"QaaDistributionForm",
			  rows:[
				{ view:"forminput", label:"QAA*", body:{rows:[
					{ view:"checkbox", labelRight:"랜덤QAA분배",height:75,labelWidth:0},
		    		{template: "<span class='t2'>[사용시평가 대상자에게 체크된 QAA중 랜덤하게 매칭]</span>", height: 44},
					QaaRandomDistribution
					]}
				},
				{ view:"combo", label:"평가시트", options:['','','']},
				{ view:"text", label:"분배건수"},
				{ view:"forminput", label:"평가대상자*", body:{rows:[
					{ view:"checkbox", labelRight:"미분배된 평가자만 조회",height:75,labelWidth:0},
					QaaRandomDisDistribution
					]}
				},
			  ]
			}
	//webix.ajax("//localhost:9889/callList").then(function(data){ css:{ "background-color":"#AFA","text-align":"center"}
	  var QaaEvalDistributions = webix.ui({
		  id:"QaaEvalDistributions",
		  container:"QaaEvalDistributions",
		  hidden:true,
		  type:"space",
		  rows:[
			{template: "<span class='t2'><br>조회조건</span>", height: 44},
			QaaEvalDistributionform,
			{cols:[
				{rows:[
					{cols:[
						{template: "<span class='t2'><br>사용자별 분배목록</span>", height: 44},
						{view: "button", label: "엑셀다운로드", width: 95 , click:function(){
//				            webix.toExcel($$("QaGridlist"));
			        	}
						},
						{ view:"button", type:"form", value:"저장", align:"center", width:100, click:function(id,event){
							console.log("조회버튼")
						}},
						{ view:"button", type:"form", value:"삭제", align:"center", width:100, click:function(id,event){
							console.log("조회버튼")
						}}
					]},
					QaaEvalDistributionUserlist,
					{cols:[
						{template: "<span class='t2'><br>QAA별 분배현황</span>", height: 44},
					]},
					QaaEvalDistributionQaalist
				]},
				{rows:[
					{cols:[
						{template: "<span class='t2'><br>일괄분배</span>", height: 44},
						{ view:"button", type:"form", value:"저장", align:"center", width:100, click:function(id,event){
							console.log("조회버튼")
						}}
					]},
					//qaa form 변경
					QaaDistributionForm
				]}
			]}
		   ]
	 });
}
