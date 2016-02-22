var MyComponent = React.createClass({displayName: "MyComponent",
	handleClick : function(){

		this.refs.myTextInput.focus();
	},
	render : function(){

		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", ref: "myTextInput"}), 
				React.createElement("button", {value: "focus on this input", onClick: "{this.handleClick}"})
			)
		)
	}
});