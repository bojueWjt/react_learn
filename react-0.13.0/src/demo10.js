var Hello = React.createClass({
	getInitialState : function(){
		return {opacity:1.0,adds: -0.05}
	},
	componentDidMount : function(){
		var timer = setInterval(function(){

			var adds = this.state.adds;
			var opacity = this.state.opacity;

			console.log(this.state.opacity);

			opacity += adds;

			if(this.state.opacity < 0){

				adds = 0.05;
			}

			if(this.state.opacity > 1){

				adds = -0.05;
			}

			this.setState({
				opacity : opacity,
				adds : adds
			})

		}.bind(this), 100);
	},
	render : function(){

		var opacity = this.state.opacity;

		return (
			<div style={{opacity:this.state.opacity}}>
			 Hello {this.props.name}
			</div>
		)
	}
})

React.render(
	<Hello name="World" />,
	document.getElementById("example")
)