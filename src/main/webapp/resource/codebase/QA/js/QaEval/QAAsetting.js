//QAA설정
var QAAsetting = function() {
	//QAA목록
	var QAAsettinglist = {
		   view:"datatable",
	       id:"QAAsettinglist",
	       css:"QAAsettinglist",
	       height:500,
	       columns:[
	    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
 				{ id:"test1", editor:"text" ,header: {text: "분류", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test2", editor:"text" ,	header:{text:"평가항목명", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test3", editor:"text" ,	header:{text:"배점", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
 				{ id:"test4", editor:"text" ,	header:{text:"문항수", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"}//모달 필요
	       ],
    	  data:"",
    	  select:"row",
    	  drag:true,
//    	  externalData:QAAexternalData,
		  on:{
			  // the default click behavior that is true for any datatable cell
		        "onItemClick":function(id, e, trg){ 
		        	console.log(id);
		        }
			  }
	     }
	//사용자조회 데이터테이블
	  var USERsettinglist = {
			   view:"datatable",
		       id:"USERsettinglist",
		       css:"USERsettinglist",
		       height:500,
		       columns:[
		    	    { id:"ch1", header:{ content:"masterCheckbox", css:{"margin":"11px 1px 2px"}}, checkValue:'on', uncheckValue:'off', template:"{common.checkbox()}",css:"QaGridlist_css"},
	 				{ id:"test1", editor:"text" ,header: {text: "분류", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
	 				{ id:"test2", editor:"text" ,	header:{text:"평가항목명", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
	 				{ id:"test3", editor:"text" ,	header:{text:"배점", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"},
	 				{ id:"test4", editor:"text" ,	header:{text:"문항수", css:{"text-align":"center"}},fillspace:true,css:"QaGridlist_css"}//모달 필요
		       ],
	    	  data:"",
	    	  select:"row",
	    	  drag:true,
//	    	  externalData:USERexternalData,
			  on:{
				  // the default click behavior that is true for any datatable cell
			        "onItemClick":function(id, e, trg){ 
			            console.log(id);
			        }
				  }
		     }
	  //QAA조회
	  var QAAsettingsform = {
			  view:"form", id:"QAAsettingsform", scroll:"auto", // datatable 로 변경
			  css:"QAAsettingsform",
			  type:"wide",
			  height:150,
			  elements:[
					{cols:[
						{ label:"조직", view:"text" },
						{ view:"button", label:"search"},
				    	{ view:"checkbox", labelRight:"하위포함", labelWidth:0}
					]},
				    {cols:[
				    	{label:"직급", placeholder:"직급 선택",view:"richselect"},
				    	{label:"직책", placeholder:"직책 선택",view:"richselect"},
			        ]},
			        {cols:[
			        	{ view:"text",label:"사용자",height:25},
					    { view:"button", label:"search"}
			        ]},
				  ]
			};
	  //사용자조회
	  var UserSettingsform = {
			  view:"form", id:"UserSettingsform", scroll:"auto", // datatable 로 변경
			  css:"UserSettingsform",
			  type:"wide",
			  height:150,
//				  borderless:true,
			  elements:[
				{cols:[
					{ label:"조직", view:"text" },
					{ view:"button", label:"search"},
			    	{ view:"checkbox", labelRight:"하위포함", labelWidth:0}
				]},
			    {cols:[
			    	{label:"직급", placeholder:"직급 선택",view:"richselect"},
			    	{label:"직책", placeholder:"직책 선택",view:"richselect"},
		        ]},
		        {cols:[
		        	{ view:"text",label:"사용자",height:25},
				    { view:"button", label:"search"}
		        ]},
			  ]
			};
	  var QAAsettings = webix.ui({
		  id:"QAAsetting",
		  container:"QAAsetting",
		  css:"QAAsetting",
		  hidden:true,
		  rows:[
			{cols:[
				{rows:[
					{cols:[
						{template: "<span class='t2	'><br>QAA조회</span>", height: 54},
						{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
							$$("QAAsettinglist").clearAll();
							$$("QAAsettinglist").parse(QaaData);
						}}
					]},
					QAAsettingsform,
					QAAsettinglist
				]},
//				{ view:"button", label:"버튼",css:"QAAsettingButton"},
				{rows:[
					{cols:[
						{template: "<span class='t2	'><br>사용자조회</span>", height: 54},
						{ view:"button", type:"form", value:"조회", align:"center", width:100, click:function(id,event){
							$$("USERsettinglist").clearAll();
							$$("USERsettinglist").parse(UserData);
						}}
					]},
					UserSettingsform,
					USERsettinglist
				]}
			]}
		   ]
		 });
}
