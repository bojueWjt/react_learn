var MyTitle = React.createClass({displayName: "MyTitle",
	PropTypes : {
		title: React.PropTypes.string.isRequired
	},

	render: function(){

		return React.createElement("h1", null, " ", this.props.title, " ")
	}
});

var param = 123;

React.render(
	React.createElement(MyTitle, {title: param}),
	document.getElementById("example")
)


