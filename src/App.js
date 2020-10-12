// import React from "react";
// import "App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import Button from "components/Button";

// function App() {
// 	return (
// 		<div className="text-center">
// 			<Container>
// 				<h1>My new React App</h1>
// 			</Container>
// 		</div>
// 	);
// }

// export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faImage, faPlusSquare);

function App() {
	return (
		<Router>
			<Routes />
		</Router>
	);
}

export default App;
