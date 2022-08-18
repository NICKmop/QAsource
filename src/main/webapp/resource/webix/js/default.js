//d3 - word cloud lib
var width = 600,
    height = 300
var svg = d3.select("#cloud").append("svg")
    .attr("width", width)
    .attr("height", height);
d3.csv("/resouce/kp/js/worddata.csv", function (data) {
    showCloud(data)
    setInterval(function(){
         showCloud(data)
    },2000) 
});
//scale.linear: 선형적인 스케일로 표준화를 시킨다. 
//domain: 데이터의 범위, 입력 크기
//range: 표시할 범위, 출력 크기 
//clamp: domain의 범위를 넘어간 값에 대하여 domain의 최대값으로 고정시킨다.
wordScale = d3.scale.linear().domain([0, 100]).range([0, 300]).clamp(true);
var svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

function showCloud(data) {
    d3.layout.cloud().size([width, height])
        //클라우드 레이아웃에 데이터 전달
        .words(data)
        .rotate(function (d) {
            return d.text.length > 3 ? 0 : 90;
        })
        //스케일로 각 단어의 크기를 설정
        .fontSize(function (d) {
            return wordScale(d.frequency);
        })
        //클라우드 레이아웃을 초기화 > end이벤트 발생 > 연결된 함수 작동  
        .on("end", draw)
        .start();
    // 랜덤색 추가
    function getRandomColor() { 
    	var letters = '0123456789ABCDEF'; 
    	var color = '#'; 
    	for (var i = 0; i < 6; i++) { 
    		color += letters[Math.floor(Math.random() * 16)]; 
    	} 
    	return color; 
    }
    function draw(words) { 
        var cloud = svg.selectAll("text").data(words)
        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "overwatch")
            .style("fill", function (d) {
                return getRandomColor(d.text)
            })
            .style("fill-opacity", .5)
            .attr("text-anchor", "middle") 
            .attr('font-size', 1)
            .text(function (d) {
                return d.text;
            }); 
        cloud
            .transition()
            .duration(600)
            .style("font-size", function (d) {
                return d.size + "px";
            })
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .style("fill-opacity", 1); 
    }
}
// d3.js - 방사형 차트 lib