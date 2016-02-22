var MyComponent = React.createClass({displayName: "MyComponent",
	handleClick : function(){

		this.refs.myTextInput.focus();
	}
})