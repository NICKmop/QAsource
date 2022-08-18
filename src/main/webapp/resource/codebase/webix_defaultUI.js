function textLength(a,b){
	a = a.title.toString().length;
	b = b.title.toString().length;
	return a>b?1:(a<b?-1:0);
};
function sortByParam(a,b){
	a = a.rank;
	b = b.rank;
	return a>b?1:(a<b?-1:0);
}
//평가 기준 설정 균질도 fn
function addToTop(){
  $$("tree1").add({value:"New item"}, 0);
}

function addToParent(){
  var parentId= $$("tree1").getSelectedId();
  if(parentId)
    $$("tree1").add({value:"New item"}, 0, parentId);
  else
    webix.alert("Select node")
}

function addAsChild(){
  $$("tree1").select("1");
  var parentId = $$("tree1").getSelectedId();
  var pos = $$("tree1").getBranchIndex("1.2"); // "1.2" is the "Part2" item's id
  $$("tree1").add({value:"New item"}, pos, parentId);
}

function removeSelected(){
  var nodeId = $$("tree1").getSelectedId();
  $$("tree1").remove(nodeId);
}
// webixAjaxCommon
function webixAjaxCommon(url,id) {
	webix.ajax(url).then(function(data){
		var arr = data.text();
		$$(id).parse(arr);
	});
}
//QA 목록 리스트
function QAitem(item) {
	//콜리스트
	if (item == "콜 리스트") {
		$$("testA").show();
	}else{
		$$("testA").hide();
	}
	//평가 결과 조회
	if (item == "평가 결과 조회") {
		$$("testB").show();
	}else{
		$$("testB").hide();
	}
	//우수콜 관리
	if (item == "우수콜 관리") {
		$$("testC").show();
	}else{
		$$("testC").hide();
	}
	//우수콜 조회/청취
	if (item == "우수콜 조회/청취") {
		$$("testD").show();
	}else{
		$$("testD").hide();
	}
	//평가콜 이의 신청
	if (item == "평가콜 이의신청") {
		$$("testE").show();
	}else{
		$$("testE").hide();
	}
	//중복호 리스트 및 청취
	if (item == "중복호 리스트 및 청취") {
		$$("testF").show();
		$$("data_container").show();
	}else{
		$$("testF").hide();
		$$("data_container").hide();
	}
	//평가 기준 설정
	if (item == "평가 기준 설정") {
		$$("testG").show();
		$$("testH").show();
	}else{
		$$("testG").hide();
		$$("testH").hide();
	}
	//평가 대상 설정
	if (item == "평가 대상 설정") {
		$$("testJ").show();
	}else{
		$$("testJ").hide();
	}
	
	//평가 자동 설정
	if (item == "평가 자동 설정") {
		$$("testM").show();
	}else{
		$$("testM").hide();
		
	}
	
	//금칙어 설정
	if (item == "금칙어 설정") {
		$$("testN").show();
		$$("testN-container").show();
	}else{
		$$("testN").hide();
		$$("testN-container").hide();
	}
	
	//정답지 입력
	if (item == "정답지 입력") {
		$$("testO").show();
	}else{
		$$("testO").hide();
	}
	
	//화면 권한 설정
	if (item == "화면 권한 설정") {
		$$("testP").show();
	}else{
		$$("testP").hide();
	}
}
var webixUiList = function() {
	webix.ui({
		rows: [
			{ view: "toolbar", padding:3, elements: [
				{ view: "button", type: "icon", icon: "mdi mdi-menu",
					width: 37, align: "left", css: "app_button", click: function(){
						$$("$sidebar1").toggle();
					}
				},
				{ view: "label",
				  label: "QA",
				  id: "QA"
				}
			]
			},
			{ cols:[
				{
					view: "sidebar",
					data: menu_data2,
					width: 280,
					on:{
						onAfterSelect: function(id){
							webix.message(this.getItem(id).value)
							var item = this.getItem(id).value;
							QAitem(item);
						},
					}
				},
				{ template:
					"<div id='testA'></div>" +
					"<div id='testB'></div>" +
					"<div id='testC'></div>" +
					"<div id='testD'></div>" +
					"<div id='testE'></div>" +
					"<div id='data_container'></div>" +
					"<div id='testF'></div>" +
					"<div id='testH'></div>" +
					"<div id='testG'></div>" +
					"<div id='testJ'></div>" +
					"<div id='testM'></div>" +
					"<div id='testN-container'></div>" +
					"<div id='testN'></div>" +
					"<div id='testO'></div>" +
					"<div id='testP'></div>"
				}
			]}
		]
	});
	//콜리스트
//	webix.ajax("//localhost:9889/callList").then(function(data){
	webixAjaxCommon("//localhost:9889/callList","gridTestA");
	var pagerA = {
		view:"pager",
		id:"pagerA",
		size:10,
		group:5,
		
	};
	var testAgrida = {
		container:"gridTestA",
		view:"datatable",
		id:"gridTestA",
		columns:[
			{ id:"id",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사ID",width:100,	sort:sortByParam},
			{ id:"test4",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test5",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test6",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test7",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test8",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test9",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test10",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test11",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test13",	header:"업무유형", 	width:95,	sort:sortByParam},
			{ id:"test14",	header:"콜 구분", 	width:75,	sort:sortByParam},
			{ id:"test15",	header:"금칙어", 	width:75,	sort:sortByParam},
			{ id:"test16",	header:"'''", 	width:60,	sort:sortByParam},
			{ id:"test17",	header:"BI ?", 	width:60,	sort:sortByParam},
			{ id:"test18",	header:"배정일", 	width:100,	sort:sortByParam}
		],
		autoheight:true,
		autowidth:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerA"
	};
	  webix.ui({
	    container:"testA",
	    hidden:true,
	    id:"testA", 
	    rows:[
	      testAgrida,
	      pagerA
	    ]
	  });
	//평가 결과 조회
	webixAjaxCommon("/EvaluationResult","gridTestB");
	var pagerB = {
		view:"pager",
		id:"pagerB",
		size:10,
		group:5
	};
	var testBgrida = {
		container:"gridTestB",
		view:"datatable",
		id:"gridTestB",
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사ID",width:100,	sort:textLength},
			{ id:"test4",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test5",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test6",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test7",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test8",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test9",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test10",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test11",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test13",	header:"업무유형", 	width:95,	sort:sortByParam},
			{ id:"test14",	header:"콜 구분", 	width:75,	sort:sortByParam},
			{ id:"test15",	header:"금칙어", 	width:75,	sort:sortByParam},
			{ id:"test16",	header:"'''", 	width:60,	sort:sortByParam},
			{ id:"test17",	header:"BI ?", 	width:60,	sort:sortByParam},
			{ id:"test18",	header:"배정일", 	width:100,	sort:sortByParam},
		],
		autoheight:true,
		autowidth:true,
		select:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerB",
		data:analyzer2,
		on: {
		  onItemDblClick:function(e, id, node){
		    $$("editwin").show(node);
		  }
		}
	}
	webix.ui({
		  view:"popup",
		  id:"editwin",
		  height:700,
		  width:1200,
		  left:100, top:50,  
		  head:"My Window",
		  padding: 20,
		  body:{
			  rows : [
				  {
					  cols :[
						  {
							  view:"chart",
							  width:400,
							  height:250,
							  type:"radar",
							  xAxis:{
							    template:"#month#"
							  },
							  yAxis:{
							    lineShape:"arc"
							  },
							  legend:{
							    layout:"y",
							    width: 110,
							    align:"right",
							    valign:"middle",
							    marker:{
							      type: "item"
							    },
							    values:[
							      {text:"피치",color:"#3399ff"},
							      {text:"에너지",color:"#66cc00"},
							      {text:"발화속도",color:"#66cc00"},
							      {text:"잡음",color:"#66cc00"}
							    ]
							  },
							  series:[
							    {
							      value:"#companyA#",
							      tooltip:{ template:"#companyA#" },
							      line:{ color:"#3590D0", width:2 },
							      item:{
							        color:"#ffffff",
							        borderColor:"#3399ff",
							        radius:2,
							        borderWidth:2,
							        type:"d"
							      }
							    },
							    {
							      value:"#companyB#",
							      tooltip:{ template:"#companyB#" },
							      line:{ color:"#66cc00", width:2 },
							      item:{
							        color:"#ffffff",
							        borderColor:"#66cc00",
							        radius:2,
							        borderWidth:2,
							        type:"s"
							      }
							    },
							    {
							      value:"#companyC#",
							      tooltip:{ template:"#companyC#" },
							      line:{ color:"#66cc00", width:2 },
							      item:{
							        color:"#ffffff",
							        borderColor:"#4b0082",
							        radius:2,
							        borderWidth:2,
							        type:"s"
							      }
								},
							    {
							      value:"#companyD#",
							      tooltip:{ template:"#companyD#" },
							      line:{ color:"#66cc00", width:2 },
							      item:{
							        color:"#ffffff",
							        borderColor:"#FF8C00",
							        radius:2,
							        borderWidth:2,
							        type:"s"
							      }
								},
							  ],
							  data:companies
							},
							{
							  view:"datatable",id:"analyzerGroup",title:"분석그룹 : 광주센터/e여신_D",css:"analyzerGroup",							
							  columns:[
							    { id:"sub",	header:"구분", width:100 },
							    { id:"pattern", header:"패턴" ,fillspace:true},
							    { id:"weight",	header:"가중치" , width:70 },
							    { id:"consult",	header:"상담사", 	width:70 },
							    { id:"group",	header:"소속", 	width:60 },
							    { id:"job",	header:"업무", 	width:60},
							    { id:"type",	header:"유형", 	width:60},
							    { id:"currentCall",	header:"현재콜", 	width:70},
							    { id:"others",	header:"편차", 	width:60},
							  ],
							  select:"cell",
							  autoheight:true,
							  scrollX:false,
							  data:analyzerGroupData
							}
					  ]
				  }
			 ]
		  }	  
	});
	webix.ui({
	    container:"testB",
	    hidden:true,
	    id:"testB", 
	    rows:[
    	  testBgrida,
    	  pagerB
	    ]
	  });
	//우수콜 관리
	var pagerC = {
		view:"pager",
		id:"pagerC",
		size:10,
		group:5
	};
	testCgrida = {
		container:"testCgrida",
		view:"datatable",
		id:"testCgrida",
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사ID",width:100,	sort:textLength},
			{ id:"test4",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test5",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test6",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test7",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test8",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test9",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test10",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test11",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test13",	header:"업무유형", 	width:95,	sort:sortByParam}
		],
		autoheight:true,
		autowidth:true,
		data:analyzer3,
		select:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerC"
	};
	webix.ui({
	    container:"testC",
	    hidden:true,
	    id:"testC", 
	    rows:[
    	  testCgrida,
    	  pagerC
	    ]
	  });
	//우수콜 조회/청취
	var pagerD = {
			view:"pager",
			id:"pagerD",
			size:10,
			group:5
		};
	var	testDgrida = {
		container:"testDgrida",
		view:"datatable",
		id:"testDgrida",
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사ID",width:100,	sort:textLength},
			{ id:"test4",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test5",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test6",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test7",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test8",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test9",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test10",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test11",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test13",	header:"업무유형", 	width:95,	sort:sortByParam}
		],
		autoheight:true,
		autowidth:true,
		data:analyzer3,
		select:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerD"
	};
	webix.ui({
	    container:"testD",
	    hidden:true,
	    id:"testD", 
	    rows:[
    	  testDgrida,
    	  pagerD
	    ]
	  });
	//평가콜 이의 신청
	var pagerE = {
			view:"pager",
			id:"pagerE",
			size:10,
			group:5
		};
	var	testEgrida = {
		container:"testEgrida",
		view:"datatable",
		id:"testEgrida",
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사ID",width:100,	sort:textLength},
			{ id:"test4",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test5",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test6",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test7",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test8",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test9",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test10",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test11",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test13",	header:"업무유형", 	width:95,	sort:sortByParam}
		],
		autoheight:true,
		autowidth:true,
		data:analyzer3,
		select:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerE"
	};
	webix.ui({
	    container:"testE",
	    hidden:true,
	    id:"testE", 
	    rows:[
    	  testEgrida,
    	  pagerE
	    ]
	  });
	//중복호 리스트 및 청취 , 중복호 기준설정
	var pagerF = {
		view:"pager",
		id:"pagerF",
		size:10,
		group:5
	};
	
	var testFgrida = {
		container:"testFgrida",
		view:"datatable",
		id:"testFgrida",
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"인입(I/O)" , width:95 },
			{ id:"test3",	header:"상담사",width:85,	sort:textLength},
			{ id:"test4",	header:"상담사ID",width:100,	sort:textLength},
			{ id:"test5",	header:"내선", 	width:60,	sort:sortByParam},
			{ id:"test6",	header:"부서(소속)", 	width:95,	sort:sortByParam},
			{ id:"test7",	header:"사번", 	width:70,	sort:sortByParam},
			{ id:"test8",	header:"이름", 	width:60,	sort:sortByParam},
			{ id:"test9",	header:"고객ANI", 	width:120,	sort:sortByParam},
			{ id:"test10",	header:"콜키", 	width:100,	sort:sortByParam},
			{ id:"test11",	header:"시작시간", 	width:150,	sort:sortByParam},
			{ id:"test12",	header:"종료시간", 	width:150,	sort:sortByParam},
			{ id:"test13",	header:"상담시간", 	width:95,	sort:sortByParam},
			{ id:"test14",	header:"업무유형", 	width:95,	sort:sortByParam}
		],
		data: duplicateCall,
		autoheight:true,
		autowidth:true,
		select:true,
		scroll:false,
		yCount:10,
		navigation:true,
		pager:"pagerF"
	};
	webix.ui({
		container:"data_container",
		id:"data_container",
		view:"toolbar", height:50,
		hidden:true,
		cols:[
			{ 
				view:"select", width:300,
				label: '허용일자 범위', labelAlign:"right",
				value:1, options:[
					{ id:1, value:"최근 1일" }, 
					{ id:2, value:"최근 2일" }, 
					{ id:3, value:"최근 3일" },
					{ id:3, value:"최근 4일" },
					{ id:3, value:"최근 5일" }
				]
			},
			{ 
				view:"select", width:300,
				label: '조건 1', labelAlign:"right",
				value:1, options:[
					{ id:1, value:"sample 1" }, 
					{ id:2, value:"sample 2" }, 
					{ id:3, value:"sample 3" },
					{ id:3, value:"sample 4" },
					{ id:3, value:"sample 5" }
				]
			},
			{ 
				view:"select", width:300,
				label: '조건 2', labelAlign:"right",
				value:1, options:[
					{ id:1, value:"sample 1" }, 
					{ id:2, value:"sample 2" }, 
					{ id:3, value:"sample 3" },
					{ id:3, value:"sample 4" },
					{ id:3, value:"sample 5" }
				]
			},
			{
		      view:"button", value:"조회(btn)", css:"webix_primary", width:100,
		      click: function() {
		    	  webix.message("조회(btn)");
		      }
			}
		]
	});
	webix.ui({
	    container:"testF",
	    hidden:true,
	    id:"testF", 
	    rows:[
    	  testFgrida,
    	  pagerF
	    ]
	  });
	//평가 기준 설정
	// -균질도 분석 설정
	webix.ui({
		container: "testG",
		view:"datatable",
		id:"testG",
		hidden:true, width:700,
		columns:[
			{ id:"test1",	header:"" ,width:50},
			{ id:"test2",	header:"균질도 템플릿" ,width:180  },
			{ id:"test3",	header:"사용여부",autowidth:true ,	sort:textLength ,width:85},
			{ id:"test4",	header:"작성자",autowidth:true ,	sort:sortByParam},
			{ id:"test5",	header:"등록일자",autowidth:true ,	sort:sortByParam,width:180},
			{ id:"test6",	header:"수정일자",autowidth:true ,	sort:sortByParam,width:180}
		],
		autoheight:true,
		autowidth:true,
		data:resultTargetSetting
	});
	webix.ui({
		container:"testH",
		id:"testH",
		view:"toolbar", height:50,
		hidden:true,
		cols:[
			{ view:"label", label: "템플릿 추가", autowidth:true },
			{ view:"label", label: "템플릿 명", autowidth:true },
			{ view: "text", value:"팀600_월말평가" ,autowidth:true  },
			{ view:"label", label: "사용여부", autowidth:true },
			{ view:"label", label: "사용함", autowidth:true },
			{ view:"checkbox" ,autowidth:true },
			{ view:"label",label: "사용안함", autowidth:true },
			{ view:"checkbox" ,autowidth:true },
			{
		      view:"button", value:"추가(btn)", css:"webix_primary", width:100,
		      click: function() {
		    	  webix.message("추가(btn)");
		    	  $$("testHpopup").show();
		      }
			}
		]
	});
	// 경청태도 VAR
	var tree1 = {
	  view:"tree",
	  id:"tree1",
	  select:true,height:250,width:135,
	  data: data_with_icon3
	};
//	{ view:"tree",select:true, data: data_with_icon3},
	var grid1 = {
	  view:"datatable",
	  id:"grid1",
	  columns:[
	    { id:"id" , header:"등급명"},
	    { id:"value", header:"스코어",fillspace:1, editor:"text" }
	  ], editable:true,
	  on:{
	    onAfterEditStop:function(state, editor){
	      $$("tree1").updateItem(editor.row, this.getItem(editor.row));
	    }
	  }
	};
	webix.ui({
		  view:"popup",
		  id:"testHpopup",
		  left:500, top:150,height:500,width:774,
		  head:"균질도 분석",
		  padding: 20,
		  body:{
			  rows : [
				  {
					  cols :[
						  { view:"label", label: "템플릿 명", autowidth:true },
						  { view: "text", value:"팀600_월말평가" ,autowidth:true  },
						  { view:"label", label: "사용함", autowidth:true },
						  { view:"checkbox" ,autowidth:true },
						  { view:"label",label: "사용안함", autowidth:true },
						  { view:"checkbox" ,autowidth:true },
					  ]
				  },
				  {
					  cols :[
						  { view:"tree",select:true, data: data_with_icon1,autoheight:true , height:33}
					  ]
				  },
				  {
					  cols:[
						  { view:"tree",select:true, data: data_with_icon2,height:33}
					  ]
				  },
				  {
					  //tree 오픈시 이벤트 확인.
					  cols:[
						  {body:tree1},
					      { body:grid1 }
					  ]
				  },
				  {
					  cols:[
						  { view:"tree",select:true, data: data_with_icon4,height:33}
					  ]
				  },
				  {
					  cols:[
						  { view:"tree",select:true, data: data_with_icon5}
					  ]
				  },
				 {
			       view:"button", value:"저장(btn)", css:"webix_primary", width:100,
			       click: function() {
			    	   webix.message("저장(btn)");
			       }
				 }
			 ]
		  }	  
	});
	$$("grid1").bind($$("tree1"), "$level");
	//평가 대상 설정
	var toolbar3 = {
	  view:"toolbar", 
	  cols:[
	    {
	      margin:1, borderless:true, rows:[
			  {
		    	cols:[
		    		{ view:"button", value:"부서(소속)", height:33, gravity:2, click:function(){
		    			console.log("부서 소속!")
		    		}},
		    		{ view:"button", value:"개인", height:33, gravity:2, click:function(){
		    			console.log("개인")
		    		}},
		    		{ view:"button", value:"직무별?", height:33, gravity:2, click:function(){
		    			console.log("직무별?")
		    		}}
		    	]
			  },
	        { view:"button", value:"부서(소속)_Tree형태 조직현황", height:33 , click:function(){
    			console.log("부서(소속)_Tree형태 조직현황")
    		}}
	      ]
	    }
	  ]
	};
	webix.ui({
		id:"testJ",
		container:"testJ",
		height:400,width:300,
		hidden:true,
		rows:[
			{
			  margin:25,
			  rows:[
			    toolbar3
			  ]
			},
	    	 {
	    		 cols:[
	  		       { 
	  		         view:"tree",
	  		         type:"lineTree",
	  		         position: "top",
	  		         data: webix.copy(smalltreedata)
	  		       }
	  		     ],
		  			on: {
		  				onItemClick:function(e, id, node){
		  				  console.log("111111");
		  			  }
	  			}
	    	 }
		]
		}
	);
	//평가 자동 설정
	//selectFilter empty text일시 -> 전체로 찍기위해서.
	webix.ui.datafilter.selectFilter.originalRefresh = webix.ui.datafilter.selectFilter.refresh;
	webix.ui.datafilter.selectFilter.refresh = function(master, node, value){
	  this.originalRefresh.apply(this, arguments);
	  var node = this.getInputNode(node);
	  if(node && node.options) node.options[0].text = value.$emptyText||"";
	}
	webix.ui({
		container:"testM",
		view:"datatable",
		id:"testM",
		hidden:true,
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"평가명" , width:200},
			{ id:"test3",	header:"구분",width:60},
			{ id:"test4",	header:[ "평가항목",{content:"selectFilter" ,$emptyText:"전체"}], 	width:90},
			{ id:"test5",	header:"균질도 템플릿", 	width:170},
			{ id:"test6",	header:"평가기간", width:200}, //date range 사용시 pro버전으로 업그레이드 필요
			{ id:"test7",	header:"부서(소속)", 	width:140}
		],
		autoheight:true,
		width:920,
		select:true,
		data:resultAutoSetting
	});
	//금칙어 설정
	webix.ui({
		container:"testN",
		view:"datatable",
		id:"testN",
		hidden:true,width:881,
		columns:[
			{ id:"test1",	header:"순번", css:"rank", width:60},
			{ id:"test2",	header:"금칙어 그룹명" , width:115, editor:"popup" },
			{ id:"test3",	header:"등록건수",width:90},
			{ id:"test4",	header:"적용여부",width:90},
			{ id:"test5",	header:"적용부서(조직)",width:100},
			{ id:"test6",	header:"등록자", 	width:95},
			{ id:"test7",	header:"등록일시", 	width:145},
			{ id:"test8",	header:"수정일시", 	width:145},
			{ id:"test9",	header:"삭제", 	width:90}
		],
		autoheight:true,
		data: badwordset,
		editable:true,
		select:"cell"
//		,
//		on: {
//			  onItemDblClick:function(e, id, node){
//				  console.log(e.column);
//				  if (e.column == "test2") {
//					  $$("testNpopup").show();
//				}
//			  }
//			}
	});
	webix.ui({
		  view:"popup",
		  id:"testNpopup",
		  left:500, top:150,height:500,width:774,
		  head:"추가 팝업/편집 팝업",
		  padding: 20
	});
	webix.ui({
		container:"testN-container",
		id:"testN-container",
		view:"toolbar", height:50,
		hidden:true,
		cols:[
			{ view:"label", label: "적용여부", autowidth:true },
			{ view: "text", value:"Y/N" ,autowidth:true  },
			{ view:"label", label: "상태", autowidth:true },
			{ view: "text", value:"정상/삭제" ,autowidth:true  },
			{ view:"label", label: "적용부서", autowidth:true },
			{ view: "text", value:"팀100/200'''" ,autowidth:true  },
			{ view:"label", label: "금칙어 그룹명", autowidth:true },
			{ view: "text", value:"욕설_1/욕설_2'''" ,autowidth:true  },
			{ view:"button", value:"검색(btn)", autowidth:true, align:'left', click: function() {
				webix.message("검색(btn)");
			}},
			{
		      view:"button", value:"추가(btn)", css:"webix_primary", width:100,
		      click: function() {
		    	  webix.message("추가(btn");
		      }
			}
		]
	});
	//스크립트 설정
	//정답지 입력
	webix.ui({
		container:"testO",
		view:"datatable",
		id:"testO",
		hidden:true,
		columns:[
			{ id:"test1",	header:"순번",autowidth:true},
			{ id:"test2",	header:"상담사",autowidth:true},
			{ id:"test3",	header:"상담사ID",autowidth:true},
			{ id:"test4",	header:"센터명",autowidth:true},
			{ id:"test5",	header:"부서(팀)명",autowidth:true},
			{ id:"test6",	header:"업무권한",autowidth:true},
			{ id:"test7",	header:"등록일자",autowidth:true},
			{ id:"test8",	header:"수정일자",autowidth:true}
		],
		autoheight:true,
		autowidth:true,
		select:true,
		data: collectSetting
	});
	//화면 권한 설정
	webix.ui({
		container:"testP",
		view:"datatable",
		id:"testP",
		hidden:true,
		columns:[
			{ id:"test1",	header:"순번",autowidth:true},
			{ id:"test2",	header:"권한",autowidth:true},
			{ id:"test3",	header:"권한명",autowidth:true}
		],
		autoheight:true,
		autowidth:true,
		select:true,
		data: authController,
		on: {
		  onItemDblClick:function(e, id, node){
		    $$("testP-container").show(node);
		  }
		}
	});
	var list1 = { 
	  view:"dbllist", 
	  list:{ height:200, scroll:true },
	  labelLeft:"접근 가능 페이지",
	  labelRight:"접근 불가 페이지",
	  data:authControllerData
	};
	webix.ui({
		  view:"popup",
		  id:"testP-container",
		  left:500, top:150,height:360,width:850,
		  head:"접근여부페이지",
		  padding: 20,
		  body:{
			  rows : [
				  {
					  cols :[
						  {
							  view: "scrollview",
							  scroll: "y",
							  body: {
							    view:"form", id:"f1", width: 700,
							    rows:[
							      { view:"forminput", name:"access", body:list1, labelWidth:140 },
							      { view:"button", value:"적용", inputWidth:250, align:'center',padding:{
							          top:35},click:function() {
										webix.message("적용")
								  }},
						    ]
						  }
						}
					  ]
				  },
			 ]
		  }	  
	});
	$$("f1").setValues({
	  access:"1,2,3",
	  screens:"3"
	});
}