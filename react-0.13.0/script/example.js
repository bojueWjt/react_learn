var CommentBox = React.createClass({
	render: function(){

		return (
			<div className="commentBox">
				hellow,world! I an a CommentBox.
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById("content")
	);