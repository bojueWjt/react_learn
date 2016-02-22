var Hello = React.createClass({displayName: "Hello",
	getInitalState : function(){
		return {opacity:1.0,adds: -0.05}
	},
	componentDidMount : function(){
		var timer = setInterval(function(){

			var adds = this.state.adds;
			var opacity = this.state.opacity;

			opacity += adds;

			if(this.state.opacity === 0){

				adds = -0.05;
			}

			this.setState({
				opacity : opacity,
				adds : adds
			})

		}.bind(this), 100);
	}
})