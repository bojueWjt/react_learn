var NotesList = React.createClass({
	render: function(){

		return <ul> { React.Children.map(this.props.children,function(child){

			return <li>{child}</li>
		})}</ul>
	}
});

React.render(
	<NotesList>
		<span>ninico</span>
		<span>www.ninico.top</span>
	</NotesList>,

	document.getElementById("example")
)