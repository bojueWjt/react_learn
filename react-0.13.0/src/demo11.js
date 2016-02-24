var UserBox = React.createClass({
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
				console.log("ninicoco")
				this.setState({
					userName : data.owner.login,
					sourceUrl : data.html_url
				});
			}
		}.bind(this))
	},
	render : function(){
		return (
			<div> {this.state.userName}s last gist is <a href={this.state.sourceUrl}>here</a></div>
		)
	}
});

React.render(
	<UserBox  source="https://api.github.com/users/octocat/gists"/>,
	document.getElementById("example")
)