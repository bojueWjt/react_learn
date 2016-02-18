// var MyTitle = React.createClass({
// 	propTypes : {
// 		title: React.PropTypes.string.isRequired
// 	},

// 	render: function(){

// 		return <h1> {this.props.title} </h1>
// 	}
// });

// var param = 123;

// React.render(
// 	<MyTitle title={param} />,
// 	document.getElementById("example")
// )


var MyTitle = React.createClass({

	getDefaultProps : {

		title: "hello ninico!"
	},

	render:function(){

		return <h1>{this.props.title}</h1>
	}
});

React.render(
	<MyTitle />,
	document.getElementById("example")
)