var LikeBtn = React.createClass({
	getInitialState : function(){
		return {like: false};
	},
	handleClick : function(){
		this.setState({like: !this.state.like});
	},
	render : function(){
		
		var tips = this.state.like ? "like" : "haven't liked"

		return (
			<p onClick={this.handleClick}>you {tips} this,Click to toggle</p>
		
		)
		
	}

});

React.render(
	<LikeBtn />,
	document.getElementById("example")
)