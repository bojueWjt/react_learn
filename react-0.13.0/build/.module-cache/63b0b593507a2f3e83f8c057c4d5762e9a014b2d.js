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
			value => this.setState({loading:false,data:value})
		)
	}
})