var QpiMenuData = [
	{id: "tables1", icon: "mdi mdi-view-dashboard", value: "균질도",  data:[]},
	{id: "tables2", icon: "mdi mdi-view-dashboard", value: "단어",  data:[]},
	{id: "tables3", icon: "mdi mdi-view-dashboard", value: "평가관리",  data:[
		{ id: "table_bh_th1", value: "품질평가 관리", data:[
			{ id: "table_th1", value: "평가항목 관리"},
			{ id: "table_th2", value: "평가시트 관리"},
			{ id: "table_th3", value: "QAA설정"},
			{ id: "table_th4", value: "평가 제외자 관리"},
			{ id: "table_th5", value: "평가그룹 관리-센터"},
			{ id: "table_th6", value: "평가그룹 관리-본사"},
			{ id: "table_th7", value: "평가분배"},
		]},
		{ id: "table_bh_th2", value: "평가실행", data:[
			{ id: "table_th8", value: "품질평가 실행"},
			{ id: "table_th9", value: "품질평가 이력"},
		]},
	]},
	{id: "tables4", icon: "mdi mdi-view-dashboard", value: "콜",  data:[]},
	{id: "tables5", icon: "mdi mdi-view-dashboard", value: "모니터링",  data:[]},
	{id: "tables6", icon: "mdi mdi-view-dashboard", value: "설정",  data:[]}
];
var Qacities = [
	//조직 ,이름 ,사번 ,직책 ,평가시트 ,목표점수 ,목목표건수 ,임시저장 건수 ,저장건수
    {id:1, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용철",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용주",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26"}, 
    {id:2, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용진",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0"},
    {id:3, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드"},
    {id:4, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"김수철",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0"},
    {id:5, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"김동수",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26"},
    {id:6, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"김명구",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0"},
    {id:7, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"김칠홍",csagIdNumber:"0960012",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26"},
  ];
var Qacities1 =[
    {id:1, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***7",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:2, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***8",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:3, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***9",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:4, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***0",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:6, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***1",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"반갑습니다",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:7, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***2",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:8, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***3",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하지못하네요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:9, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***4",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"as상담사입니다",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:10, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"010365***5",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"테스트",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:11, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***6",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"테스트2",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:12, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***7",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"상담사",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:13, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***8",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"고객의 말",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:14, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***9",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"sop유형별 정리",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:15, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***10",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"데이터 호출",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:16, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***11",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:17, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***12",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:18, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***13",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
    {id:19, csagbutton:"",value:"test_0722_본사",values:"test_0722_본사",QAgroup:"cs혁신팀",csagId:"이용수",csagIdNumber:"0960012",phoneNumber:"0103652***14",test4:"직원",test5:"test_0722_본사",test6:"0",test7:"1",test8:"0",test9:"0",test10:"0",test11:"0",test12:"0",test13:"0",consultstart:"이용수",consult:"ok",consultTime:"2021-07-07",resultTime:"2021-07-26",valuepoint:"100.0",valuepoints:85,valuekind:"HEART QPI",res1:"일반",calls:"인바운드",text:"안녕하세요",textEvalSheets:"테스트_7월_상담역량 모니터"},
]
var Qasel = [
	  { value: "" },
	  { id:"test_0722_본사" },
	  { id:"test_0722_센터" },
	];
var QaRunningDt = [
    {id:2, value:"임시저장"}, {id:3, value:"저장"}, {id:4, value:"완료"}, {id:5, value:"완료취소"}
  ];
var QaalistRow = [
	{ id:1, csagid:"이용철",test1:0960012, test2:"일산1HCS3팀", test3:"01089641123", test4:"김인수", csagbutton:"",test5:"인바운드",test6:"00:04:52",test7:"2021-07-23 09:01:16",test8:"2021-07-23 09:06:08",test9:"완료",test10:"SR202107230092433-1-1A1LX32O",test11:"기가 인터넷 최대 500M",test12:10,test13:60.0,test14:"공감/양해표현",test15:"인터넷", date:"2018-06-10 18:45", text:"안녕하세요"},
	{ id:2, csagid:"이용철",test1:0960012, test2:"일산1HCS3팀", test3:"01088641923", test4:"김규횹", csagbutton:"" ,test5:"인바운드",test6:"00:05:56",test7:"2021-07-23 09:06:17",test8:"2021-07-23 09:12:13",test9:"완료",test10:"",test11:"",test12:10,test13:60.0,test14:"공감/양해표현",test15:"TV", date:"2018-06-12 19:40", text:"네 반갑습니다 안녕하세요"},
	{ id:3, csagid:"이용철",test1:0960012, test2:"일산1HCS3팀", test3:"010654120152", test4:"김인철", csagbutton:"" ,test5:"아웃바운드",test6:"00:03:44",test7:"2021-07-23 09:13:19",test8:"2021-07-23 09:17:03",test9:"완료",test10:"",test11:"",test12:10,test13:60.0,test14:"공감/양해표현",test15:"인터넷", date:"2018-06-12 20:16", text:"AS 관련 문의를 좀 드릴려고 하는데요"},
	{ id:4, csagid:"이용철",test1:0960012, test2:"일산1HCS3팀", test3:"01085641123", test4:"김규철", csagbutton:"" ,test5:"인바운드",test6:"00:04:20",test7:"2021-07-23 09:17:54",test8:"2021-07-23 09:22:14",test9:"완료",test10:"",test11:"",test12:10,test13:60.0,test14:"공감/양해표현",test15:"TV", date:"2018-06-14 21:57", text:"네 AS 관련 문의 받았구요 답변 드리겠습니다"},
  ];
var QaaListSearchWindowtableData=[
	{id:"1",EvalSheets:"테스트_7월_상담역량 모니터링",totalP:144.0,currentP:144.0,listnumber:"6"}
]
var QaEvalsampleData = [
	{test1:"진심어린공감",test2:"첫인사/끝인사",test3:"O",test4:"5.0",test5:"5.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"첫인사/끝인사",test3:"x",test4:"5.0",test5:"5.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"첫인사/끝인사",test3:"O",test4:"5.0",test5:"5.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"[검증인바운드]<br>업무처리필요 <br>문제해결능력",test3:"",test4:"25.0",test5:"25.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"[검증인바운드]<br>업무처리필요 <br>문제해결능력",test3:"",test4:"25.0",test5:"15.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"[검증인바운드]<br>업무처리필요 <br>문제해결능력",test3:"",test4:"25.0",test5:"13.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"[검증인바운드]<br>업무처리필요 <br>문제해결능력",test3:"O",test4:"25.0",test5:"11.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
	{test1:"진심어린공감",test2:"[검증인바운드]<br>업무처리필요 <br>문제해결능력",test3:"O",test4:"25.0",test5:"0.0",test6:"첫인사 끝인사를 모두 이행한 경우",test7:"완료 됨"},
]
var Qpi_small_film_set = [
	{test1:"테스트_7월_상담역량모니터링",test2:"144",test3:"144",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-22"},
	{test1:"테스트_8월_상담역량모니터링",test2:"100",test3:"100",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-23"},
	{test1:"테스트_9월_상담역량모니터링",test2:"150",test3:"150",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-24"},
	{test1:"테스트_10월_상담역량모니터링",test2:"80",test3:"80",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-25"},
	{test1:"테스트_11월_상담역량모니터링",test2:"70",test3:"70",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-26"},
	{test1:"테스트_12월_상담역량모니터링",test2:"60",test3:"60",test4:"예",test5:"6",test6:"1",test7:"관리자1",test8:"2021-07-27"}
];
