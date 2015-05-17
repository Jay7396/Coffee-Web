var Header = React.createClass({
	render:function(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle collapsed" type="button" type="button" data-toggle="collapse" data-target="#navbar">
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="nav navbar-brand" href="#">Coffee</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="#title">首頁</a>
							</li>
							<li>
								<a href="#slide1">關於我們</a>
							</li>
							<li>
								<a href="/album">作品</a>
							</li>
							<li>
								<a href="#slide2">服務</a>
							</li>
							<li>
								<a href="#contact">聯絡我們</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			)
	}
})

var Footer = React.createClass({
	render : function(){
		return(
			<div className="footer">
				<div className="container">
					<hr />
					<p className = "text-center">© 2015. Bootstrap&React web page by Jerry</p>
				</div>
			</div>
			)
	}
})

var SliderBox = React.createClass({
	render: function() {
		return (
			<div className="sliderbox">
				<Sliderheader />
				<Slider1 />
				<Slider2 />
				<Contact />
				<Contactform />
			</div>
		);
	}
});

var Sliderheader = React.createClass({
	render: function() {
		return (
			<div className="slide header" id='title'>
				<h1>Coffee Studio</h1>
				<h2>Photo Graphy</h2>
			</div>
		);
	}
});

var Slider1 = React.createClass({
		render: function() {
			return (
				<div className="slide" id="slide1">
					<div className="title">
						<h1>關於我們</h1>
						<p>一場婚宴最珍貴的回憶，不是當下辦的多氣派巴拉巴拉巴拉</p>
					</div>
				</div>
			);
		}
	});	

var Slider2 = React.createClass({
	render: function(){
		return (
		<div id="slide2" className="slide">
			<div className="title">
				<h1>專長與經歷</h1>
				<p>人像寫真與婚攝等等等等等噶逼自己補</p>
			</div>
			<img src="images/nikon.jpg" />
			<img src="images/coffee.jpg" />
		</div>
		)
	}
});

var Contact = React.createClass({
	render : function(){
		return (
			<div id="contact" className="section">
				<div className="container">
					<div className="row text-center">
					<h1>聯絡我們</h1>
					<h4 className="text-muted">如果有任何問題，我會回答你</h4>
					</div>
				</div>
			</div>
			)
	}
})

var Contactform = React.createClass({
	render : function(){
		return(
			<form className="form-horizontal" action="/contact" method="post" role="form">
				<div className="col-md-1"></div>
				<div className="col-md-3">
						<div className="form-group">
							<div className="col-md-12">
								<input className="form-control" name="name" type="text" placeholder="Name" />
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<input className="form-control" name="email" type="email" placeholder="Email" />
							</div>
						</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<div className="col-md-12">
							<textarea className="form-control" name="message" rows="4" placeholder="Message" required />
						</div>
					</div>
				</div>
				<div className = "col-md-10">
					<input className="btn btn-success pull-right" type="submit" vaule="送出" />
				</div>
			</form>
			)
	}
})

React.render(
	<Header />,
	document.getElementById('header')
	)

React.render(
	<SliderBox />,
	document.getElementById('react')
	)

React.render(
	<Footer />,
	document.getElementById('footer')
	)