var InputValue = React.createClass({displayName: "InputValue",
	getInitialState : function(){
		return {value: "hello"}
	},
	handleChange : function(event){
		this.setState({value : event.target.value})
	},
	render : function(){
		var Value = this.state.value;
		return (
			React.createElement("div", {class: "input-ground"}, 
				React.createElement("input", {type: "text", name: "userName", onChange: this.handleChange}), 
				React.createElement("p", null, value)
			)
		)
	}
});

React.render(
	React.createElement(InputValue, null),
	document.getElementById("example")
);