var ReposList = React.createClass({displayName: "ReposList",

	getInitialState : function(){

		return {
			loading : true,
			error : null,
			data : null
		}
	},
	componentDidMount : function(){

		this.props.promise.then(
			value => this.setState({loading:false,data:value}),
			error => this.setState({loading:false,error:error})
		)
	},
	render : function(){

		if(this.state.loading){
			return React.createElement("div", null, "loading...")
		}
		else if(this.state.error !== null){
			return React.createElement("div", null, "Error: ", this.state.error.message, " ")
		}
		else if(this.state.data !== null){

			var repos = this.state.data.items;

			var repolist = repos.map(function(item){

				return (
					React.createElement("li", null, 
			           React.createElement("a", {href: item.html_url}, item.name), " (", item.stargazers_count, " stars) ", React.createElement("br", null), " ", item.description
			        )
				);
			});
		};

		return (
			React.createElement("main", null, 
	          React.createElement("h1", null, "Most Popular JavaScript Projects in Github"), 
	          React.createElement("ol", null, repolist)
	        )
		)
	}
})