var arr = ["ninico","zhanghaiming","jianjian"];

React.render(
	<div>
	{
		arr.map(function(value){
			return <h1>{ value}</h1>
		})
	}
	</div>,
	document.getElementById("example")
);