var LikeBtn = React.createClass({displayName: "LikeBtn",
	getInitialState : function(){
		return {like: false};
	},
	handleClick : function(){
		this.setState({like: !this.state.like});
	},
	render : function(){
		
		var tips = this.state.like ? "like" : "haven/'t liked"

		return (
			React.createElement("p", {onClick: this.handleClick}, "you ", tips, " this,Click to toggle")
		
		)
		
	}

});

React.render(
	React.createElement(LikeBtn, null),
	document.getElementById("example")
)