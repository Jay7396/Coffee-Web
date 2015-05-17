var SliderBox = React.createClass({displayName: "SliderBox",
	render: function() {
		return (
			React.createElement("div", {className: "sliderbox"}, 
				React.createElement(Sliderheader, null), 
				React.createElement(Slider1, null)
			)
		);
	}
});

var Sliderheader = React.createClass({displayName: "Sliderheader",
	render: function() {
		return (
			React.createElement("div", {className: "slide header", id: "title"}, 
				React.createElement("h1", null, "Coffee Studio"), 
				React.createElement("h2", null, "Photo Graphy")
			)
		);
	}
});

var Slider1 = React.createClass({displayName: "Slider1",
		render: function() {
			return (
				React.createElement("div", {className: "slide", id: "slide1"}, 
					React.createElement("div", {className: "title"}, 
						React.createElement("h1", null, "關於我們"), 
						React.createElement("p", null, "一場婚宴最珍貴的回憶，不是當下辦的多氣派巴拉巴拉巴拉")
					)
				)
			);
		}
	});	



React.render(
	React.createElement(SliderBox, null),
	document.getElementById('react')
	)