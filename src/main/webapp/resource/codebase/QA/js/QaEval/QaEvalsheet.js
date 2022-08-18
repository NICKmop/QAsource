//평가시트 관리
function addData(id,id_data){
  var values = $$(id).getValues();
  $$(id_data).add({
    title:values.title,
    year:values.year
  }, 0);
}

function removeData(id_data){
  if(!$$(id_data).getSelectedId()){
    webix.message("No item is selected!");
    return;
  }
  $$(id_data).remove($$(id_data).getSelectedId());
}
//품질평가 관리 - > 평가시트 관리
var QaEvalsheet = function() {
	 //평가시트 관리 폼
	  var QaSheetSearchform = {
		    view:"form",
		    id:"QaSheetSearchform",
		    elements:[
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
		    		  { view:"button", label:"search",width:100},
		    		  { view:"checkbox", label:"하위포함", labelWidth:70, value:1},
		    		  {label:"평가시트",labelWidth:100 ,view:"text",name:"sheetInput" },
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
	  //평가시트 목록 데이터 테이블
	  var QaSheetSearchlist = {
			   view:"datatable",
		       id:"QaSheetSearchlist",
		       css:"QaSheetSearchlist",
		       height:300,
		       columns:[
	 				{ id:"test1", editor:"text" ,header: {text: "평가시트", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test2", editor:"text" ,	header:{text:"총 배점", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test3", editor:"text" ,	header:{text:"항목 총점", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test4", editor:"text" ,	header:{text:"사용여부", css:{"text-align":"center"}},fillspace:true}, //모달 필요
	 				{ id:"test5", editor:"text" ,	header:{text:"항목수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test6", editor:"text" ,	header:{text:"사용횟수", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test7", editor:"text" ,	header:{text:"등록자", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"test8", editor:"text" ,	header:{text:"등록일", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data:"",
	    	  select:"row",
			  on:{
			        "onItemClick":function(id, e, trg){ 
			        	console.log(id)
			        }
				  }
		     }
	  //평가시트 상세정보 폼
	  var QaSearchform = {
			  view:"form", id:"QaSearchform", scroll:true, // datatable 로 변경
			  css:"QaSearchform",
			  type:"wide",
			  height:400,
//				  borderless:true,
			  elements:[
				{cols:[
					{ label:"평가시트", view:"text" },
					{ lavel: "사용여부", view:"richselect" }
				]},
				{cols:[
					{ label:"총 배점", view:"text"},
					{ label:"총 배점", view:"text"}
				]},
				{cols:[
					{ label:"평가유형",view:"richselect"},
					{ label:"평가분야",view:"richselect"}
				]},
				{ label:"관리조직",view:"text"},
				{ label:"비고",view:"text",height:-1}
//			    {
//	    		      view:"radio",
//	    		      label:"AIsetter",
//	    		      labelPosition:"right",
//	    		      options:[
//	    		        { id:"1",value:"AI"}, 
//	    		      ]
//			    },
			  ]
			};
	  //평가시트 상세정보 데이터 테이블
	  var QaSheetResult = {
		   view:"datatable",
	       id:"QaSheetResult",
	       css:"QaSheetResult",
	       drag:true,
	       columns:[
	    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
 				{ id:"QaC", editor:"text" ,	header:{text:"분류", css:{"text-align":"center"}},fillspace:true},
 				{ id:"QaL", editor:"text" ,	header:{text:"평가항목명", css:{"text-align":"center"}},fillspace:true},
 				{ id:"QaP", editor:"text" ,	header:{text:"배점", css:{"text-align":"center"}},fillspace:true},
 				{ id:"QaE", editor:"text" ,	header:{text:"타입", css:{"text-align":"center"}},fillspace:true},
 				{ id:"QaW", editor:"text" ,	header:{text:"문항수", css:{"text-align":"center"}},fillspace:true},
	       ],
    	  data: ""
      }
	//webix.ajax("//localhost:9889/callList").then(function(data){ css:{ "background-color":"#AFA","text-align":"center"}
	  var QaEvalsheetControl = webix.ui({
		  id:"QaEvalsheetControl",
		  container:"QaEvalsheetControl",
		  hidden:true,
		  rows:[
			{cols:[
				{template: "<span class='t3	'><br>평가시트 관리</span>", height: 54},
				{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
					console.log("조회버튼")
				}}
			]},
			QaSheetSearchform,
			{template: "<span class='t1'><br>평가시트 목록</span>", height: 54},
			QaSheetSearchlist,
			{cols:[
				{template: "<span class='t3	'><br>평가시트 상세정보</span>", height: 54},
	    		{ view:"button", label:"평가시트보기",width:120},
	    		{ view:"button", label:"신규",width:70},
	    		{ view:"button", label:"복사",width:70},
	    		{ view:"button", label:"저장",width:70},
	    		{ view:"button", label:"해제",width:70}
			]},
			{cols:
				[
					QaSearchform,
					{rows:[
						{cols:[
							{ view:"button", label:"순서저장",width:120},
				    		{ view:"button", label:"항목기준수정",width:120},
				    		{ view:"button", label:"평가항목추가",width:120},
				    		{ view:"button", label:"평가항목삭제",width:120}
						]},
						QaSheetResult
					]},
				]
			}
		   ]
	 });
}
