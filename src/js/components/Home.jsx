import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";			
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div> 
            <Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row">
				<Card
                        img="https://picsum.photos/200/150?random=1"
                        title="Card title 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
                        buttonText="Find Out More!"
                    />
                    <Card
                        img="https://picsum.photos/200/150?random=2"
                        title="Card title 2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
                        buttonText="Find Out More!"
                    />
                    <Card
                        img="https://picsum.photos/200/150?random=3"
                        title="Card title 3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
                        buttonText="Find Out More!"
                    />
                    <Card
                        img="https://picsum.photos/200/150?random=4"
                        title="Card title 3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
                        buttonText="Find Out More!"
                    />
				</div>
				
			</div>
			<Footer/>
	       

		</div>
	);
};

export default Home;