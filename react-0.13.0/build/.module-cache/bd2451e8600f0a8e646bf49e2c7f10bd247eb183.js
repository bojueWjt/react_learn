var MyComponent = React.createClass({displayName: "MyComponent",
	handleClick : function(){

		this.refs.myTextInput.focus();
	},
	render : function(){

		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", ref: "myTextInput"}), 
				React.createElement("button", {onClick: "{this.handleClick}"}, "focus on this input")
			)
		);
	}
});

React.render(
	React.createElement(MyComponent, null),
	document.getElementById("example")
)

var MyComponent = React.createClass({displayName: "MyComponent",
  handleClick: function() {
    // this.refs.myTextInput.focus();
    console.log(this);
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", ref: "myTextInput"}), 
        React.createElement("input", {type: "button", value: "Focus the text input", onClick: this.handleClick})
      )
    );
  }
});

React.render(
  React.createElement(MyComponent, null),
  document.getElementById('example')
);