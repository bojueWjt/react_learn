var UserBox = React.createClass({displayName: "UserBox",
	getInitialState : function(){
		return {
			userName : "",
			sourceUrl : ""
		}
	},
	componentDidMount : function(){

		console.log("ninico");
		$.get(this.props.source,function(result){

			var data = result[0];

			if(this.isMounted()){
				this.setState({
					userName : data.owner.login,
					sourceUrl : data.html_url
				});
			}
		}.bind(this))
	},
	render : function(){
		return (
			React.createElement("div", null, " ", this.state.userName, "s last gist is ", React.createElement("a", {href: this.state.sourceUrl}, "here"))
		)
	}
});

React.render(
	React.createElement(UserBox, {source: "https://api.github.com/users/octocat/gists"}),
	document.getElementById("example")
)