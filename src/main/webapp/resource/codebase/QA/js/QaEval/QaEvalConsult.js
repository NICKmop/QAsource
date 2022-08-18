//평가 항목 관리
var QaSetRe = function() {
	//webix.ajax("//localhost:9889/callList").then(function(data){ css:{ "background-color":"#AFA","text-align":"center"}
	//평가항목 목록 리스트
	var QaGrid = {
		   view:"datatable",
	       id:"QaGridlist",
	       css:"QaGridlist",
	       height:300,
	       columns:[
	    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
 				{ id:"test1", editor:"text" ,header: {text: "분류", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test2", editor:"text" ,	header:{text:"평가항목명", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test3", editor:"text" ,	header:{text:"배점", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test4", editor:"text" ,	header:{text:"문항수", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"}, //모달 필요
 				{ id:"test5", editor:"text" ,	header:{text:"문항타입", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test6", editor:"text" ,	header:{text:"사용횟수", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test7", editor:"text" ,	header:{text:"등록자", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test8", editor:"text" ,	header:{text:"등록일", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test9", editor:"text" ,	header:{text:"수정자", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test10", editor:"text" ,	header:{text:"수정일", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"}
	       ],
    	  data:"",
    	  select:"row",
    	  span:true,
		  on:{
			  // the default click behavior that is true for any datatable cell
		        "onItemClick":function(id, e, trg){ 
		            var QaGridlist = this.getItem(id);
		            console.log(QaGridlist)
		            $$("QaGridResultlist").clearAll();
//		            console.log("QaRunGridInfo: ",QaRunGridInfo.csagId);
		            $$("Qaform").parse(QaGridlist);
		            $$("QaGridResultlist").parse(QaGridlist);
		        }
			  }
	     }
	  //평가항목 상세정보 폼
	  var Qaform = {
			  view:"form", id:"Qaform", scroll:true, // datatable 로 변경
			  css:"Qaform",
			  type:"wide",
			  height:400,
//				  borderless:true,
			  elements:[
			    { label:"항목명*", view:"text", name:"test2" },
			    {label:"분류*", view:"richselect",  name:"test1"},
			    {cols:[
			    	{ view:"datepicker", label:"배점*", name:"test3", stringResult:true },
			    	{ view:"text", name:"test5", label:"타입*" ,height:-1}
		        ]},
			    { view:"textarea", name:"ttt1", label:"비고" ,height:-1},
			    { view:"text",name:"controldata",label:"관리조직*",height:25},
			    {
	    		      view:"radio",
	    		      label:"AIsetter",
	    		      labelPosition:"right",
	    		      options:[
	    		        { id:"1",value:"AI"}, 
	    		      ]
			    },
			  ]
			};
	  //Qaform1
	  var Qaform1 = webix.copy(Qaform);
	  for (var i=0; i<Qaform1.length; i++) 
	  Qaform1[i].disabled = true;
	  
	  //평가항목 상세정보 리스트
	  var QaGridResult = {
			   view:"datatable",
		       id:"QaGridResultlist",
		       css:"QaGridResultlist",
		       columns:[
	 				{ id:"test3", editor:"text" ,	header:{text:"점수*", css:{"text-align":"center"}},fillspace:true},
	 				{ id:"rrr", editor:"text" ,	header:{text:"평가기준", css:{"text-align":"center"}},fillspace:true}
		       ],
	    	  data: ""
		     }
	  //평가항목 관리 폼
	  var QaSearchlist = {
		    view:"form",
		    id:"QaSearchlistform",
		    elements:[
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"관리조직", tooltip:""},
		    		  { view:"button", label:"search"},
		    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1},
		    		  {label:"분류", view:"richselect", placeholder:"분류선택",options:["1","2","3"], name:"data.type"},
				      { view:"text", label:"항목명",name:""},
		    	  ]
		      },
		      {
		    	  cols:[
		    		  { view:"text", placeholder:"", label:"등록일자",align:"right", placeholder:"기간선택"},
		    		  { view:"button", label:"search", align:"right"},
		    		  { view:"checkbox", labelRight:"하위포함", labelWidth:0, value:1 },
		    		  { view:"text", placeholder:"",align:"right", label:"사용자", tooltip:""},
		    		  { view:"button", label:"search", align:"right"},
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
	  var QaEvalConsult = webix.ui({
		  id:"QaEvalConsult",
		  container:"QaEvalConsult",
		  hidden:true,
		  rows:[
//			{template: "<span class='t1'><br>Menu Tap</span>", height: 54},
//			QaMenuTap,
			{cols:[
				{template: "<span class='t3	'><br>평가항목 관리</span>", height: 54},
				{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
					$$("QaGridlist").parse(Qpi_small_film_set);
				}}
			]},
			QaSearchlist,
			{cols:[
				{template: "<span class='t1'><br>평가항목 목록</span>", height: 54},
		        {
			          view: "button", label: "excel다운로드", width: 95 , click:function(){
			            webix.toExcel($$("QaGridlist"));
			          }
			        },
			]},
			 QaGrid,
			 {
		    	cols:[
		    		{template: "<span class='t2'><br>평가항목 상세정보</span>", height: 54},
					{
					    view:"button", id:"Evalt2_sbtn1", label:"신규",width:140,click:function(id,event){
					    	console.log("신규");
						}
					},
					{
					    view:"button", id:"Evalt2_sbtn2", label:"저장",width:140,click:function(id,event){
					    	console.log("평가수정");
					    }
					},
					{
					    view:"button", id:"Evalt2_sbtn3", label:"삭제",width:140,click:function(id,event){
					    	console.log("평가삭제");
					    }
					},
	    		]
			 },
		     {cols:[Qaform,QaGridResult]}
		   ]
		 });
}
