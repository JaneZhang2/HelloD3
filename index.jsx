// var width = 600;
// var height = 600;
// var svg = d3.select("#test").append("svg")
//   .attr("width", width)
//   .attr("height", height);
//
// //用于坐标轴的线性比例尺
// var xScale = d3.scale.linear()
//   .domain([0, 10])
//   .range([0, 300]);
//
// //定义坐标轴
// var axis = d3.svg.axis()
//   .scale(xScale)
//   .orient("bottom");
//
// //在svg中添加一个包含坐标轴各元素的g元素
// var gAxis = svg.append("g")
//   .attr("transform", "translate(80,80)");
//
// //在gAxis中绘制坐标轴
// gAxis.attr("class", "axis");
// axis(gAxis);

// var dataset = [50, 43, 120, 87, 99, 167, 142];
// var width = 400;//SVG绘制区域的宽度
// var height = 400;//SVG绘制区域的高度
//
// var svg = d3.select("#test")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height);
//
// //定义上下左右的边距
// var padding = {top: 20, right: 20, bottom: 20, left: 20};
//
// //矩形所占的宽度(包括空白),单位为像素
// var rectStep = 35;
//
// //矩形所占的宽度(不包括空白),单位为像素
// var rectWidth = 30;
//
// var rect = svg.selectAll("rect")
//   .data(dataset)//绑定数据
//   .enter()//获取enter部分
//   .append("rect")//添加rect元素,使其与绑定数组的长度一致
//   .attr("fill", "steelblue")//设置颜色为steeblue
//   .attr("x", function (d, i) {
//     return padding.left + i * rectStep;
//   })
//   .attr("y", function (d) {
//     return height - padding.bottom - d;
//   })
//   .attr("width", rectWidth)
//   .attr("height", function (d) {
//     return d;
//   })