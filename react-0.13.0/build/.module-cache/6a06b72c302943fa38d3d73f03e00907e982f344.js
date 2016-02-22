var MyComponent = React.createClass({displayName: "MyComponent",
	handleClick : function(){

		this.refs.myTextInput.focus();
	},
	render : function(){

		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", ref: "myTextInput"}), 
				React.createElement("button", {onClick: "{this.handleClick}"}, "focus on this input"), 
				"// ", 
					console.log(this)					
				
			)
		);
	}
});

React.render(
	React.createElement(MyComponent, null),
	document.getElementById("example")
)
