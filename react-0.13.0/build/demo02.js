var arr = ["ninico","zhanghaiming","jianjian"];

React.render(
	React.createElement("div", null, 
	
		arr.map(function(value){
			return React.createElement("h1", null,  value)
		})
	
	),
	document.getElementById("example")
);