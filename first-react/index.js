const root = ReactDOM.createRoot(document.getElementById("root"));

const page = (
	<div>
		<img src="react-logo.png" width="40"></img>
		<h1>Fun facts about React</h1>
		<ul>
			<li>Was first released in 2013</li>
 			<li>Was originally created by Jordan Walke</li>
 			<li>Has well over 100K stars on Github</li>
 			<li>Is maintained by Facebook</li>
 			<li>Power thousands of enterprise apps, including mobile apps</li>
 		</ul>
	</div>
);

root.render(page);

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