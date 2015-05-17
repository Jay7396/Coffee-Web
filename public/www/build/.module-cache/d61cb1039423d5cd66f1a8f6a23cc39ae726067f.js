var Header = React.createClass({displayName: "Header",
	render:function(){
		return(
			React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, 
				React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "navbar-header"}, 
						React.createElement("button", {className: "navbar-toggle collapsed", type: "button", type: "button", "data-toggle": "collapse", "data-target": "#navbar"}, 
							React.createElement("span", {className: "icon-bar"}), 
							React.createElement("span", {className: "icon-bar"}), 
							React.createElement("span", {className: "icon-bar"})
						), 
						React.createElement("a", {className: "nav navbar-brand", href: "#"}, "Coffee")
					), 
					React.createElement("div", {id: "navbar", className: "collapse navbar-collapse"}, 
						React.createElement("ul", {className: "nav navbar-nav"}, 
							React.createElement("li", {className: "active"}, 
								React.createElement("a", {href: "#title"}, "首頁")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "#slide1"}, "關於我們")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "/album"}, "作品")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "#slide2"}, "服務")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "#contact"}, "聯絡我們")
							)
						)
					)
				)
			)
			)
	}
})

var Footer = React.createClass({displayName: "Footer",
	render : function(){
		return(
			React.createElement("footer", {className: "footer"}, 
				React.createElement("div", {className: "container"}, 
				React.createElement("hr", null), 
				React.createElement("p", {className: "text-center"}, "© 2015. Bootstrap&React web page by Jerry")
				)
			)
			)
	}
})

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
				React.createElement("div", {className: "col-md-1"}), 
				React.createElement("div", {className: "col-md-3"}, 
						React.createElement("div", {className: "form-group"}, 
							React.createElement("div", {className: "col-md-12"}, 
								React.createElement("input", {className: "form-control", name: "name", type: "text", placeholder: "Name"})
							)
						), 
						React.createElement("div", {className: "form-group"}, 
							React.createElement("div", {className: "col-md-12"}, 
								React.createElement("input", {className: "form-control", name: "email", type: "email", placeholder: "Email"})
							)
						)
				), 
				React.createElement("div", {className: "col-md-6"}, 
					React.createElement("div", {className: "form-group"}, 
						React.createElement("div", {className: "col-md-12"}, 
							React.createElement("textarea", {className: "form-control", name: "message", rows: "4", placeholder: "Message", required: true})
						)
					)
				), 
				React.createElement("div", {className: "col-md-10"}, 
					React.createElement("input", {className: "btn btn-success pull-right", type: "submit", vaule: "送出"})
				)
			)
			)
	}
})

React.render(
	React.createElement(Header, null),
	document.getElementById('header')
	)

React.render(
	React.createElement(SliderBox, null),
	document.getElementById('react')
	)

React.render(
	React.createElement(Footer, null),
	document.getElementById('footer')
	)