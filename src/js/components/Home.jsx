import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";			


//create your first component
const Home = () => {
	return (
		<div> 
            <Navbar/>
			<div class="container">
				<Jumbotron/>
				<div>
					4 veces card
				</div>

			</div>
	       

		</div>
	);
};

export default Home;