var InputValue = React.createClass({
	getInitialState : function(){
		return {value: "hello"}
	},
	handleChange : function(event){
		this.setState({value : event.target.value})
	},
	render : function(){
		var Value = this.state.value;
		return (
			<div class="input-ground">
				<input type="text" name="userName" onChange={this.handleChange}/>
				<p>{Value}</p>
			</div>
		)
	}
});

React.render(
	<InputValue />,
	document.getElementById("example")
);