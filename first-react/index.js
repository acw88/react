function Page() {
	return (
		<div>
			<header>
				<nav>
					<img src="react-logo.png" width="40" />
				</nav>
			</header>
			<h1>Fun facts about React</h1>
			<ol>
				<li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
            	<li>I'm more likely to get a job as a developer if I know React</li>
	 		</ol>
	 		<footer>
	 			<small>© 20xx acw development. All rights reserved.</small>
	 		</footer>
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
// function MainContent() {
// 	return (
// 		<h1>Hello, everyone</h1>
// 	)
// }

// ReactDOM.render(
// 	<MainContent />, 
// 	document.getElementById("root"));

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

// const page = (
// 	<div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// );

// const navbar = (
// 	<nav>
// 		<h1>My Website</h1>
// 		<ul>
// 			<li>Pricing</li>
// 			<li>About</li>
// 			<li>Contact</li>
// 		</ul>
// 	</nav>
// )

// ReactDOM.render(
// 	navbar, 
//     document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

// const root = ReactDOM.createRoot(document.getElementById("root"));