var Hello = React.createClass({displayName: "Hello",
	getInitialState : function(){
		return {opacity:1.0,adds: -0.05}
	},
	componentDidMount : function(){
		var timer = setInterval(function(){

			var adds = this.state.adds;
			var opacity = this.state.opacity;

			console.log(this.state.adds);

			opacity += adds;

			if(this.state.opacity === 0){

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
			React.createElement("div", {style: {opacity:this.state.opacity}}, 
			 "Hello ", this.props.name
			)
		)
	}
})

React.render(
	React.createElement(Hello, {name: "World"}),
	document.getElementById("example")
)