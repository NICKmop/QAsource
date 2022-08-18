//품질평가 관리 - > 평가 항목 관리
var QaEvalGroupCompany = function() {
	//QaEvalGroupCenter
	//webix.ajax("//localhost:9889/callList").then(function(data){ css:{ "background-color":"#AFA","text-align":"center"}
	  var QaEvalGroupCompanylist = {
		   view:"datatable",
	       id:"QaEvalGroupCompanylist",
	       css:"QaEvalGroupCompanylist",
	       height:300,
	       columns:[
 				{ id:"test1", editor:"text" ,header: {text: "순번", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test2", editor:"text" ,	header:{text:"평가월", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test3", editor:"text" ,	header:{text:"그룹명", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test4", editor:"text" ,	header:{text:"사용여부", css:{"text-align":"center"}},fillspace:true,}, //모달 필요
 				{ id:"test5", editor:"text" ,	header:{text:"대상자인원", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test6", editor:"text" ,	header:{text:"비고", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test7", editor:"text" ,	header:{text:"수정자", css:{"text-align":"center"}},fillspace:true,},
 				{ id:"test8", editor:"text" ,	header:{text:"수정일", css:{"text-align":"center"}},fillspace:true,}
	       ],
    	  data:"",
    	  select:"row",
		  on:{
			  // the default click behavior that is true for any datatable cell
		        "onItemClick":function(id, e, trg){ 
//		            var QaGridlist = this.getItem(id);
		            console.log(id)
		        }
			  }
	     }
	  //사용자 조회 테이블
	  var QaEvalGroupCompanyUserlist = {
			   view:"datatable",
		       id:"QaEvalGroupCompanyUserlist",
		       css:"QaEvalGroupCompanyUserlist",
		       height:300,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
	 				{ id:"test1", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test2", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test4", editor:"text" ,	header:{text:"IDMS", css:{"text-align":"center"}},fillspace:true,}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test6", editor:"text" ,	header:{text:"입사일", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test7", editor:"text" ,	header:{text:"그룹배정<br>여부", css:{"text-align":"center"}},fillspace:true,}
		       ],
	    	  data:"",
	    	  select:"row",
			  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
//			            var QaGridlist = this.getItem(id);
			            console.log(id)
			        }
				  }
		     }
	  //평가그룹 대상 사용자
	  var QaEvalGroupCompanyUserGrouplist = {
			   view:"datatable",
		       id:"QaEvalGroupCompanyUserGrouplist",
		       css:"QaEvalGroupCompanyUserGrouplist",
		       height:400,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
	 				{ id:"test1", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test2", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test3", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test4", editor:"text" ,	header:{text:"IDMS", css:{"text-align":"center"}},fillspace:true,}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true,},
	 				{ id:"test6", editor:"text" ,	header:{text:"평가제외여부", css:{"text-align":"center"}},fillspace:true,}
		       ],
	    	  data:"",
	    	  select:"row",
			  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
//			            var QaGridlist = this.getItem(id);
			            console.log(id)
			        }
				  }
		     }
	  //Qaform
	  var QaEvalGroupCompanySearchform = {
			  view:"form", id:"QaEvalGroupCompanySearchform", scroll:true, // datatable 로 변경
			  css:"QaEvalGroupCompanySearchform",
			  height:80,
//				  borderless:true,
			  elements:[
			    {cols:[
			    	{ view:"text", label:"관리조직" },
			    	{ view:"button", label:"search",width:90},
		    		{ view:"checkbox", labelRight:"하위포함", labelWidth:0},
			    	{ view:"datepicker", label:"평가일",stringResult:true },
			    	{ view:"richselect",options:["전체","예","아니오"], label:"사용여부"}
		        ]},
			  ]
			};
	  //상세정보
	  var QaEvalGroupCompanylistform = {
			  view:"form", id:"QaEvalGroupCompanylistform", scroll:true, // datatable 로 변경
			  css:"QaEvalGroupCompanylistform",
			  height:140,
//				  borderless:true,
			  elements:[
			    {cols:[
			    	{ view:"text", label:"그룹명*" },
			    	{ view:"button", label:"search",width:45},
		    		{ view:"checkbox", labelRight:"하위포함", labelWidth:0},
	    		]},
	    		{cols:[
	    			{ view:"datepicker", label:"평가일",stringResult:true },
			    	{ view:"text", label:"관리조직*"},
			    	{ view:"button", label:"search",width:45}
	    		]},
		        {cols:[
		        	{ view:"text", label:"비고"},
		        	
		        ]}
		        ,
			  ]
			};
	  //상세정보 -> 사용자조회
	  var QaEvalGroupCompanyDetailUserSearchform = {
			  view:"form", id:"QaEvalGroupCompanyDetailUserSearchform", scroll:true, // datatable 로 변경
			  css:"QaEvalGroupCompanyDetailUserSearchform",
			  height:100,
//				  borderless:true,
			  elements:[
			    {cols:[
			    	{ view:"text", label:"조직*" },
			    	{ view:"button", label:"search",width:45},
		    		{ view:"checkbox", labelRight:"하위포함", labelWidth:0},
		        ]},
		        {cols:[
		        	{ view:"text", label:"사용자"},
		        	{ view:"button", label:"search",width:45}
		        	
		        ]}
		        ,
			  ]
			};
	  var QaEvalGroupCompanyform = {
		    view:"form",
		    id:"QaEvalGroupCompanyform",
		    elements:[
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
		    		  { view:"button", label:"search", css:"QAsearchButton"},
		    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1 ,css:"QAcheckbox"},
		    		  {label:"분류", view:"richselect", placeholder:"분류선택",options:["1","2","3"], name:"data.type"},
				      { view:"text", label:"항목명",name:""},
		    	  ]
		      },
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"등록일자",align:"right", placeholder:"기간선택"},
		    		  { view:"button", label:"search", align:"right",css:"QAsearchButton"},
		    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1 ,css:"QAcheckbox"},
		    		  { view:"text", placeholder:"",align:"right", label:"사용자", tooltip:""},
		    		  { view:"button", label:"search", align:"right",css:"QAsearchButton"},
		    		  { view:"combo",options:["전체","임시저장","저장","완료","완료취소"],align:"right", label:"평가그룹", tooltip:function(obj){
					        return obj.placeholder;
					      }},
			      ]
		      }
//			      {view:"button", type:"form", value:"Book Now", align:"center", width:150}
		    ],
		    elementsConfig:{
		      labelWidth:120, labelAlign:"left"
		    }
	  }
	  var QaEvalGroupCompanys = webix.ui({
		  id:"QaEvalGroupCompanys",
		  container:"QaEvalGroupCompanys",
		  hidden:true,
		  rows:[
			{cols:[
				{template: "<span class='t2	'><br>조회조건</span>", height: 44},
				{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
					console.log("조회버튼")
				}}
			]},
			QaEvalGroupCompanyform,
			{template: "<span class='t2'><br>평가그룹</span>", height: 54},
			 QaEvalGroupCompanylist,
			{template: "<span class='t2'><br>상세정보</span>", height: 54},
			QaEvalGroupCompanylistform,
			{cols:[
				{rows:[
					{cols:[
						{template: "<span class='t2'><br>사용자 조회</span>", height: 54},
						{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
							console.log("조회버튼")
						}}
					]},
					QaEvalGroupCompanyDetailUserSearchform,
					QaEvalGroupCompanyUserlist
				]},
				{rows:[
					{cols:[
						{template: "<span class='t2'><br>평가그룹대상 사용자</span>", height: 54},
						{view: "button", label: "엑셀다운로드", width: 95 , click:function(){
//					            webix.toExcel($$("QaGridlist"));
				        	}
				        }
					]},
					QaEvalGroupCompanyUserGrouplist
				]}
			]}
		   ]
		 });
}
