var NotesList = React.createClass({displayName: "NotesList",
	render: function(){

		return React.createElement("ul", null, " ",  React.Children.map(this.props.child),function(child){

			return React.createElement("li", null, child)
		})
	}
});