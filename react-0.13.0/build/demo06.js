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


var MyTitle = React.createClass({displayName: "MyTitle",

	getDefaultProps : function(){

		return {

				title: "hello ninico!"
			}
	}

	,

	render:function(){

		return React.createElement("h1", null, this.props.title)
	}
});

React.render(
	React.createElement(MyTitle, null),
	document.getElementById("example")
)