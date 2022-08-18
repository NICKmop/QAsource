//품질평가 실행
var QaRunner = function() {
	//QaRunSearchForm
	  var QaRunlistForm = {
	    view:"form",
	    css:"QaRunlistForm",
	    type:"space",
	    elements:[
	      {	
	    	  cols:[
	    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
	    		  { view:"button", label:"search", align:"right"},
	    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1},
	    		  {view:"datepicker",  label:"평가월", value:new Date(), format:"%d  %M %Y", tooltip:"#label# #value#"},
			      { id:"QaGroupSelec",view:"richselect",options:Qasel, label:"평가그룹", placeholder:"평가그룹 선택",tooltip:function(obj){
			        return obj.placeholder;
			      }}
	    	  ]
	      },
	      {
	    	  cols:[
	    		  { view:"text", placeholder:"", label:"조직",css:{"line-height":"38px","height":"38px"}},
	    		  { view:"button", label:"search", align:"right"},
    		      { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1 },
	    		  { view:"textarea", placeholder:"", label:"사용자",css:{"line-height":"38px"}},
	    		  { view:"button", label:"search", align:"right" },
	    		  { view:"combo",options:QaRunningDt, label:"진행상태", placeholder:"전체", tooltip:function(obj){
				        return obj.placeholder;
			      }},
		      ]
	      }
	    ],
	    elementsConfig:{
	      labelWidth:100, labelAlign:"center"
	    }
	  }
	  var QaRunGridTable = {
			   view:"datatable",
		       id:"QaRunGridTable",
		       css:"QaRunGridTable",
		       height:200,
		       columns:[
	 				{ id:"QAgroup", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagId", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"목표점수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test7", editor:"text" ,	header:{text:"목표건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"임시저장건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test9", editor:"text" ,	header:{text:"저장건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test10", editor:"text" ,	header:{text:"완료취소건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test11", editor:"text" ,	header:{text:"완료건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test12", editor:"text" ,	header:{text:"완료율", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test13", editor:"text" ,	header:{text:"평균점수", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data:"",
	    	  select:"row",
	    	  spans:true,
			  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfo = this.getItem(id);
//			            console.log("QaRunGridInfo: ",QaRunGridInfo.csagId);
			            if (QaRunGridInfo.csagId == "이용수") {
			            	$$("QaRunGridInfo").parse(QaRunGridInfo);
			            	$$("QaCallSearch").parse(Qacities1);
			            	$$("PREQaCallSearch").parse(Qacities1);
			            	$$("KeywordQaCallSearch").parse(Qacities1);
						}else{
							//datatable 초기화 나중에 공통으로 뺴기
							$$("QaRunGridInfo").clearAll();
							$$("QaCallSearch").clearAll();
							$$("QaComments").clearAll();
							$$("PREQaCallSearch").clearAll();
			            	$$("KeywordQaCallSearch").clearAll();
							$$("QaRunform").clear();
						}
			        }
				  }
		     }
	  var QaRunGridInfo = {
			   view:"datatable",
		       id:"QaRunGridInfo",
		       css:"QaRunGridInfo",
		       select:"row",
		       height:280,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}"},
	 				{ id:"QAgroup", editor:"text" ,header: {text: "조직", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagId", editor:"text" ,	header:{text:"이름", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"직책", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"목표점수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test7", editor:"text" ,	header:{text:"목표건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"임시저장건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test9", editor:"text" ,	header:{text:"저장건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test10", editor:"text" ,	header:{text:"완료취소건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test11", editor:"text" ,	header:{text:"완료건수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test12", editor:"text" ,	header:{text:"완료율", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test13", editor:"text" ,	header:{text:"평균점수", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data: "",
	    	  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
			            var QaRunGridInfoItem = this.getItem(id);
			            $$("QaRunform").parse(QaRunGridInfoItem);
			        }
				  }
		     }
	  var QaRunform = {
			  view:"form",
			  id:"QaRunform",
			  scroll:true, // datatable 로 변경
			  css:"QaRunform",
			  type:"wide",
			  height:400,
//				  borderless:true,
			  elements:[
				    {cols:[
				    	{ view:"text", label:"상담사", name:"consultstart", stringResult:true },
				    	{ view:"datepicker", name:"consultTime", label:"상담일시" ,height:-1},
				    	{ view:"datepicker", name:"resultTime", label:"평가일자" ,height:-1}
			        ]},
			        {cols:[	
				    	{ view:"text", label:"조직", name:"QAgroup", stringResult:true },
				    	{ view:"text", label:"전화번호", name:"start", stringResult:true },
				    	{ view:"text", label:"ATT", name:"start", stringResult:true },
			        ]},
				    {cols:[
				    	{ view:"text", name:"values", label:"평가실행명" ,height:40},
				    	{ view:"text", name:"valuekind", label:"평가유형" ,height:40},
				    	{ vifew:"text", name:"res1", label:"평가분야" ,height:40}
			        ]},
			        {cols:[
				    	{ view:"text", name:"value", label:"평가시트" ,height:40},
				    	{ view:"text", name:"valuepoint", label:"평가배점" ,height:40},
				    	{ view:"text", name:"valuepoints", label:"평가점수" ,height:40}
			        ]},
			        {cols:[
				    	{ view:"text", name:"start", label:"상담유형" ,height:40},
				    	{ view:"text", name:"start", label:"취소사유" ,height:80}
			        ]},
			    	{ view:"text", name:"calls", label:"콜분류" ,height:40},
		    	    {
			    		      view:"radio",
			    		      label:"연습평가여부",
			    		      labelPosition:"right",
			    		      options:[
			    		        { id:"1",value:"yes"}, 
			    		        { id:"2",value:"no"}, 
			    		      ],
			    		      value:"1"
			    	},
			    	{cols:[
				    	{ view:"text", name:"start", label:"상담사종합평가<br>(종합평가1)" ,height:80},
				    	{ view:"text", name:"start", label:"상담사종합평가<br>(종합평가2)" ,height:80}
			        ]}
				  ]
			};
	  //평가실행 팝업************************************************
	  var Qawindowform = {
			  view:"form", id:"Qawindowform", scroll:true, // datatable 로 변경
			  css:"Qawindowform",
			  height:200,
//			  borderless:true,
			  elements:[
				    {cols:[
				    	{ view:"text", name:"csagId",label:"상담사", stringResult:true },
				    	{ view:"text", name:"csagIdNumber", stringResult:true },
				    	{ view:"datepicker", name:"start", label:"상담일시" ,height:-1},
				    	{ view:"datepicker", name:"start", label:"평가일자" ,height:-1}
			        ]},
			        {cols:[	
				    	{ view:"text", label:"조직", name:"QAgroup", stringResult:true },
				    	{ view:"text", label:"전화번호", name:"start", stringResult:true },
				    	{ view:"text", label:"ATT", name:"phoneNumber", stringResult:true },
			        ]},
				    {cols:[
				    	{ view:"text", name:"start", label:"평가실행명" ,height:40},
				    	{ view:"text", name:"start", label:"평가유형" ,height:40},
				    	{ view:"text", name:"start", label:"평가분야" ,height:40}
			        ]},
			        {cols:[
				    	{ view:"text", name:"textEvalSheets",label:"평가시트" ,height:40},
				    	{
						    view:"button", id:"Evalsheet_serachbutton",label:"sss",width:35,click:function(id,event){
						    	$$("QaaListSearchWindow").show();
						    }
						},
				    	{ view:"text", name:"start", label:"평가배점" ,height:40},
				    	{ view:"text", name:"start", label:"평가점수" ,height:40}
			        ]}
				  ]
			};
	  var QaEvalsheet = {
	       id:"QaEvalsheet",
	       view:"datatable",
	       css:"QaEvalsheet",
	       height:450,
    		   columns:[
   				{ id:"test1", editor:"text" ,header: {text: "대분류", css:"standard"},width:120},
   				{ id:"test2", editor:"text" ,	header:{text:"소분류", css:"standard"},width:120},
   				{ id:"test3", editor:"text" ,	header:{text:"AI평가", css:"standard"},width:90},
   				{ id:"test4", editor:"text" ,	header:{text:"배점", css:"standard"},width:90},
   				{ id:"test5", editor:"text" ,	header:{text:"점수", css:"standard"},width:90},
   				{ id:"test6", editor:"text" ,	header:{text:"상세내용", css:"standard"},width:180},
   				{ id:"test7", editor:"text" ,	header:{text:"항목코멘트", css:"standard"},width:180},
   			],
   		  select:"row",
	     };
	  var QaaListSearchWindowform = {
			  view:"form", id:"QaaListSearchWindowform", scroll:true, // datatable 로 변경
			  css:"QaaListSearchWindowform",
			  height:80,
//			  borderless:true,
			  elements:[
				    {cols:[
				    	{ view:"text", label:"관리조직", name:"supervisorlist", stringResult:true },
				    	{ view:"text", label:"평가시트",name:"Evalsheet", stringResult:true },
			        ]}
				  ]
			};
	  var QaaListSearchWindowtable = {
       id:"QaaListSearchWindowtable",
       view:"datatable",
       css:"QaaListSearchWindowtable",
       height:350,
       width:800,
		   columns:[
			{ id:"EvalSheets", editor:"text" ,header: {text: "평가시트"},fillspace:true},
			{ id:"totalP", editor:"text" ,	header:{text:"총배점"},fillspace:true},
			{ id:"currentP", editor:"text" ,	header:{text:"현재배점"},fillspace:true},
			{ id:"listnumber", editor:"text" ,	header:{text:"항목수"},fillspace:true}
		],
	  select:"row",
	  data:QaaListSearchWindowtableData,
	  on:{
	    "onItemDblClick":function(id){
	       $$("QaEvalsheet").parse(QaEvalsampleData);
	       
	       var sheetItem = this.getItem(id);
	       $$("textEvalSheets").setValue(sheetItem.EvalSheets);
	       
	       $$("sheetQaComments").show();
	       $$("sheetmusic").show();
	    }
	  },
     }
	  webix.ui({
		  view:"window",
		  id:"QaaListSearchWindow",
		  move:true,
		  position:"center",
		  resize: true,
		  close:true,
		  height:1000,
		  width:1000,
		  body:{
			  rows:[
				  {template: "<span class='t2	'><br>평가시트</span>", height: 54},
				  QaaListSearchWindowform,
				  QaaListSearchWindowtable
			  ]
		  }
	  }).hide(); 
	  var QaaListSearch = {
		       id:"QaaListSearch",
		       view:"datatable",
		       css:"QaaListSearch",
	    		   columns:[
	   				{ id:"csagid", editor:"text" ,header: {text: "상담사", css:"standard"}},
	   				{ id:"test1", editor:"text" ,	header:{text:"상담사ID", css:"standard"}},
	   				{ id:"test3", editor:"text" ,	header:{text:"부서", css:"standard"}},
	   				{ id:"test4", editor:"text" ,	header:{text:"고객전화번", css:"perfectConsult"}},
	   				{ id:"test5", editor:"text" ,	header:{text:"고객명", css:"perfectConsult"}},
	   				{ id:"test6", editor:"text" ,	header:{text:"인입번호", css:"perfectConsult"}},
	   				{ id:"test7", editor:"text" ,	header:{text:"콜구분명", css:"perfectConsult"}},
	   				{ id:"test8", editor:"text" ,	header:{text:"통화신간", css:"perfectConsult"}},
	   				{ id:"test9", editor:"text" ,	header:{text:"통화시작일시", css:{ "text-align":"center"}}},
	   				{ id:"test10", editor:"text" ,	header:{text:"통화종료일시", css:{ "text-align":"center"}}},
	   				{ id:"test11", editor:"text" ,	header:{text:"상담결과", css:{ "text-align":"center"}}},
	   				{ id:"test12", editor:"text" ,	header:{text:"SR번호", css:{ "text-align":"center"}}},
	   				{ id:"test13", editor:"text" ,	header:{text:"상품1레벨", css:{ "text-align":"center"}}},
	   				{ id:"test14", editor:"text" ,	header:{text:"상품2레벨", css:{ "text-align":"center"}}},
	   				{ id:"test15", editor:"text" ,	header:{text:"voc1레벨", css:{ "text-align":"center"}}},
	   				{ id:"test16", editor:"text" ,	header:{text:"voc2레벨", css:{ "text-align":"center"}}},
	   				{ id:"test17", editor:"text" ,	header:{text:"voc3레벨", css:{ "text-align":"center"}}},
	   				{ id:"test18", editor:"text" ,	header:{text:"voc4레벨", css:{ "text-align":"center"}}},
	   				{ id:"test19", editor:"text" ,	header:{text:"유발부서", css:{ "text-align":"center"}}},
	   				{ id:"test20", editor:"text" ,	header:{text:"처리기관", css:{ "text-align":"center"}}},
	   				{ id:"test21", editor:"text" ,	header:{text:"SR접수내용", css:{ "text-align":"center"}}}
	   			],
	   		  select:"row",
	   		  data:QaalistRow,
	   		  on:{
	   		    "onItemDblClick":function(id){
	   		      this.getItem(id);
	   		      console.log(this.getItem(id));
	   		    }
	   		  },
		     }
	// 대화록 샘플 
	  var sheetQaComments = {
		id:"sheetQaComments",
		view:"comments",
		hidden:true,
		data:QaalistRow
	  }
	  var QaComments = {
			  id:"QaComments",
			  view:"comments",
			  data: ""
	  };
	  var PREQaComments = {
			  id:"PREQaComments",
			  view:"comments",
			  data: ""
	  };
	  var KeywordQaComments = {
			  id:"KeywordQaComments",
			  view:"comments",
			  data: ""
	  };
	  //대화록 옆 콜리스트
	 var QaCallSearch = {
		   id:"QaCallSearch",
		   view:"datatable",
		   autowidth:true,
			   columns:[
				{ id:"QAgroup", editor:"text" ,header: {text: "조직"},width:100},
				{ id:"csagId", editor:"text" ,header: {text: "이름"},width:100},
				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번"},width:140},
				{ id:"phoneNumber", editor:"text" ,	header:{text:"번호"},width:140},
				{ id:"test5", editor:"text" ,	header:{text:"평가시트"},
					template:function(obj){
				       return "<div class='webix_el_button'><button class='webixtype_base'> 평가실행</button></div>";
			     }
				}
			   ],
			   //평가실행 버튼
			   onClick:{
				    webixtype_base:function(ev, id, html){
//				       $$("Qawindowform").clear();
			    	   $$("QaEvalsheet").parse(QaEvalsampleData);
				       
				       var sheetItem = this.getItem(id);
				       $$("textEvalSheets").setValue(sheetItem.EvalSheets);
				       
				       $$("sheetQaComments").show();
				       $$("sheetmusic").show();
			    	
				      $$("Qawindowform").parse(Qacities1);
				      $$("QAwindow").show();
//				      webix.alert("Clicked row "+id);
				    }
				  },
		  data:"",
		  select:"row",
		  //평가콜 리스트
		  on:{
	        "onItemClick":function(id, e, trg){
	            var QaCallSearch = this.getItem(id);
	            $$("QaComments").clearAll();
            	$$("QaComments").parse(QaCallSearch);
	        }
		  }
	  };
		//재사용 중이라 경고창 뜨는거임 - > 키워드 보는 항목에서 
	 var PREQaCallSearch = {
		   id:"PREQaCallSearch",
		   view:"datatable",
		   autowidth:true,
			   columns:[
				{ id:"QAgroup", editor:"text" ,header: {text: "조직"},width:100},
				{ id:"csagId", editor:"text" ,header: {text: "이름"},width:100},
				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번"},width:140},
				{ id:"phoneNumber", editor:"text" ,	header:{text:"번호"},width:140},
				{ id:"test5", editor:"text" ,	header:{text:"평가시트"},
					template:function(obj){ 
				       return "<div class='webix_el_button'><button class='webixtype_base'> 평가실행</button></div>";
			     }
				}
			   ],
			   //평가실행 버튼
			   onClick:{
				    webixtype_base:function(ev, id, html){
				    	console.log("pre id")
//					      $$("Qawindowform").bind("QaRunGridTable");
//					      $$("QAwindow").show();
//					      webix.alert("Clicked row "+id);
				    }
				  },
		  data:"",
		  select:"row",
		  //평가콜 리스트
		  on:{
	        "onItemClick":function(id, e, trg){ 
	            var PREQaComments = this.getItem(id);
	            $$("PREQaComments").clearAll();
	            	$$("PREQaComments").parse(PREQaComments);
	        }
		  }
	  };
		//재사용 중이라 경고창 뜨는거임 - > 키워드 보는 항목에서 
	 var KeywordQaCallSearch = {
		   id:"KeywordQaCallSearch",
		   view:"datatable",
		   autowidth:true,
			   columns:[
				{ id:"QAgroup", editor:"text" ,header: {text: "조직"},width:100},
				{ id:"csagId", editor:"text" ,header: {text: "이름"},width:100},
				{ id:"csagIdNumber", editor:"text" ,	header:{text:"사번"},width:140},
				{ id:"phoneNumber", editor:"text" ,	header:{text:"번호"},width:140},
				{ id:"test5", editor:"text" ,	header:{text:"평가시트"},
					template:function(obj){ 
				       return "<div class='webix_el_button'><button class='webixtype_base'> 평가실행</button></div>";
			     }
				}
			   ],
			   //평가실행 버튼
			   onClick:{
				    webixtype_base:function(ev, id, html){
				      console.log("keyword id");
//					      $$("Qawindowform").bind("QaRunGridTable");
//					      $$("QAwindow").show();
//					      webix.alert("Clicked row "+id);
				    }
				  },
		  data:"",
		  select:"row",
		  //평가콜 리스트
		  on:{
	        "onItemClick":function(id, e, trg){ 
	            var KeywordQaComments = this.getItem(id);
	            $$("KeywordQaComments").clearAll();
            	$$("KeywordQaComments").parse(KeywordQaComments);
	        }
		  }
	  };
	 //콜리스트 키워드 별 검색
	  webix.ui({
		    view:"popup",
		    id:"QAlistpopup",
		    height:250,
		    width:1000,
		    position:"center",
		    body:{
		    	rows:[
	               { view:"search", align:"center", placeholder:"Search by title...", id:"search" },
		    	   QaaListSearch
		    	]
		    }
		}).hide();
	  //search 버튼
	  $$("search").attachEvent("onTimedKeyPress",function(){ 
		  //get user input value
		  var value = this.getValue();
		  $$("QaaListSearch").filter(function(obj){
//				  if (value == obj.test4) {
//					return value;
//				  }
			  return obj.test4.indexOf(value)!=-1;
		  })
		});
	  webix.ui({
		  view:"window", id:"QAwindow",
		  move:true, position:"center",
		  close:true,
		  head:"평가실행",
		  height:1200,
		  width:1800,
		  body:{
			  rows:[
				{cols:[
					{template: "<span class='t3	'><br>조회</span>", height: 34},
				    { id:"callPointSet",view:"button", type:"form", label:"만점설정", align:"center", width:80, click:function(id,event){
				    	console.log("event :",event);
				    }},
				    { id:"dataSet1",view:"button", type:"form", label:"임시저장", align:"center", width:80, click:function(id,event){
				    	console.log("event :",event);
				    }},
				    { id:"dataSet2",view:"button", type:"form", label:"저장", align:"center", width:80, click:function(id,event){
				    	console.log("event :",event);
				    }},
				    { id:"dataSet3",view:"button", type:"form", label:"평가완료", align:"center", width:80},
				    { id:"dataSet4",view:"button", type:"form", label:"평가완료취소", align:"center", width:120}
				]},
				Qawindowform,
				{template: "<span class='t2	'><br>평가 배점</span>", height: 44},
				{cols:[
					QaEvalsheet,
					{
						rows:[
							{template:"녹취 player",id:"sheetmusic",css:{"font-size":"25"},hidden:true, height:70},
							sheetQaComments
						]
					}
				]},
				{cols:[
					{template: "<span class='t2	'><br>상담사코멘트</span>", height: 54},
					{template: "<span class='t2	'><br>관리자코멘트</span>", height: 54},
					
				]},
				{cols:[
					{ view:"text", name:"start",height:40},
					{ view:"text", name:"start", height:40}
				]}
			   ]
		  	}
		});
	  var QAtabbardata = {
			  id:"QAtabbardatas",
			  view:"tabview",
			  heigth:500,
			  cells:[
			    {
			      header:"평가정보",
			      width:250,
			      body:{
			    	  rows:[
			    		  QaRunGridInfo,
			    		  {cols:[
								{template: "<span class='t2	'><br>상세정보</span>", height: 54},
								{
								    view:"button", id:"t2_sbtn1", label:"평가실행",width:140,click:function(id,event){
								    	//datatable bind
								    	$$("Qawindowform").bind("QaRunGridTable");
								    	$$("QAwindow").show();
									}
								},
								{
								    view:"button", id:"t2_sbtn2", label:"평가수정",width:140,click:function(id,event){
								    	console.log("평가수정");
								    }
								},
								{
								    view:"button", id:"t2_sbtn3", label:"평가삭제",width:140,click:function(id,event){
								    	console.log("평가삭제");
								    }
								},
								{
								    view:"button", id:"t2_sbtn4", label:"우수평가시트등록",width:150,click:function(id,event){
								    	console.log("우수평가시트등록");
								    }
								},
								{
								    view:"button", id:"t2_sbtn5", label:"우수평가시트등록취소",width:180,click:function(id,event){
								    	console.log("우수평가시트등록취소");
								    }
								},
							]},
							QaRunform
				    	  ]
				      }
				    },
				    {
				      id:"AIlist",
				      header:"AI추천",
				      width:250,
				      body:{
						  cols:[
							  QaCallSearch,
							  {rows:[
								  {template:"녹취 콜 듣기",css:{"font-size":"25"}, height:100},
								  QaComments
							  ]}
						  ]
				      }
				    },
				    {
				      id:"CallListview",
				      header:"녹취 콜 리스트",
				      width:250,
				      body:{
						  cols:[
							  PREQaCallSearch,
							  {rows:[
								  {template:"녹취 콜 듣기",css:{"font-size":"25"}, height:100},
								  PREQaComments
							  ]}
						  ]
				      }
				    },
				    {
				      id:"keywordSerach",
				      header:"키워드 검색",
				      width:350,
				      body:{
						  cols:[
							  {rows:[
								  { view:"toolbar", cols:[{ view:"search", align:"center", placeholder:"키워드", id:"searchKeyword", width:300 },
								        {}
								      ]
								  },
								  KeywordQaCallSearch,
							  ]},
							  {rows:[
								  {template:"녹취 콜 듣기",css:{"font-size":"25"}, height:50},
								  KeywordQaComments
							  ]}
						  ]
				      }
				    }
			  ]
			};
  //************************************************************************************************************************************************************************************************
	  var QaRun = webix.ui({
		  id:"QaRun",
		  container:"QaRun",
		  css:"QaRun",
		  type:"wide",
		  resize: true,
		  hidden:true,
		  rows:[
			{cols:[
				{template: "<span class='t2'><br>품질평가 실행</span>", height: 44},
			    { view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
			    	console.log($$("QaGroupSelec").getValue());
			    	if ($$("QaCsagId").getValue() == "0960012" && $$("QaGroupSelec").getValue() == "test_0722_본사") {
				    	 $$("QaRunGridTable").parse(Qacities);
					}else{
						webix.message("다시 선택해주세요")
					}
			    }}
			]},
			QaRunlistForm,
			{cols:[
				{template: "<span class='t1'><br>평가대상자 목록</span>" ,height: 54},
				{ id:"QaCsagId",view:"textarea", label:"QAA사번 :", labelAlign:"right",width:210,height:38 },
			]},
		    QaRunGridTable,
		    {cols:[
		    	QAtabbardata
		    ]}
		   ]
		 });
	  	$$("searchKeyword").attachEvent("onTimedKeyPress",function(){
			  //get user input value
			  var value = this.getValue(); 
			  console.log(value)
			  $$("KeywordQaComments").clearAll();
			  $$("KeywordQaCallSearch").filter(function(obj){
				  console.log("obj : ",obj.text);
			    return obj.text.indexOf(value)!=-1;
//			    return obj.title.indexOf(value)!=-1;
			  })
		});
}
