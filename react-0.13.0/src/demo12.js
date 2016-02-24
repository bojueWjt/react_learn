var ReposList = React.createClass({

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
			return <div>loading...</div>
		}
		else if(this.state.error !== null){
			return <div>Error: {this.state.error.message} </div>
		}
		else{

			var repos = this.state.data.items;

			var repolist = repos.map(function(item){

				return (
					<li>
			           <a href={item.html_url}>{item.name}</a> ({item.stargazers_count} stars) <br/> {item.description}
			        </li>
				);
			});

			return (
				<main>
		          <h1>Most Popular JavaScript Projects in Github</h1>
		          <ol>{repolist}</ol>
		        </main>
			)
		};
	}
});

React.render(
	<ReposList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
	document.getElementById("example")
)