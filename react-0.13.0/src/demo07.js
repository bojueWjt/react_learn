var MyComponent = React.createClass({
	handleClick : function(){

		console.log(this.refs.myTextInput.getDOMNode())
		this.refs.myTextInput.getDOMNode().focus();
	},
	render : function(){

		return (
			<div>
				<input type="text" ref="myTextInput"/>
				<button onClick={this.handleClick}>focus on this input</button>
				 {
					console.log(this)					
				}
			</div>
		);
	}
});

React.render(
	<MyComponent />,
	document.getElementById("example")
)
