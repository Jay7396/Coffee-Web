var SliderBox = React.createClass({displayName: "SliderBox",
	render: function() {
		return (
			React.createElement("div", {className: "sliderbox"}, 
				React.createElement(Sliderheader, null), 
				React.createElement(Slider1, null), 
				React.createElement(Slider2, null), 
				React.createElement(Contact, null), 
				React.createElement(Contactform, null)
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

var Slider2 = React.createClass({displayName: "Slider2",
	render: function(){
		return (
		React.createElement("div", {id: "slide2", className: "slide"}, 
			React.createElement("div", {className: "title"}, 
				React.createElement("h1", null, "專長與經歷"), 
				React.createElement("p", null, "人像寫真與婚攝等等等等等噶逼自己補")
			), 
			React.createElement("img", {src: "images/nikon.jpg"}), 
			React.createElement("img", {src: "images/coffee.jpg"})
		)
		)
	}
});

var Contact = React.createClass({displayName: "Contact",
	render : function(){
		return (
			React.createElement("div", {id: "contact", className: "section"}, 
				React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "row text-center"}, 
					React.createElement("h1", null, "聯絡我們"), 
					React.createElement("h4", {className: "text-muted"}, "如果有任何問題，我會回答你")
					)
				)
			)
			)
	}
})

var Contactform = React.createClass({displayName: "Contactform",
	render : function(){
		return(
			React.createElement("form", {className: "form-horizontal", action: "/contact", method: "post", role: "form"}, 
				React.createElement("div", {className: "col-md-1"})
			)
			)
	}
})


React.render(
	React.createElement(SliderBox, null),
	document.getElementById('react')
	)