var NotesList = React.createClass({displayName: "NotesList",
	render: function(){

		return React.createElement("ul", null, " ",  React.Children.map(this.props.child),function(child){

			return React.createElement("li", null, child)
		})
	}
});

React.render(
	React.createElement(NotesList, null, 
		React.createElement("span", null, "ninico"), 
		React.createElement("span", null, "www.ninico.top")
	)
)