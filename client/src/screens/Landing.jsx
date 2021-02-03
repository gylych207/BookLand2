import React from 'react';
import {Link} from "react-router-dom"
import '../style.css';

export default function Landing() {
	return (
		<div className="landing-screen">
			<div className="middle-container-landing">
				<div className="rent">
					<Link to='/books'><p>Rent A Book</p></Link>
				</div>
				<img
					className="reader"
					src="https://i.imgur.com/JHejZz0.png"
					alt=""
				/>

				<div className="sell">
					<Link to='/sellyourbook' ><p>Sell Your Book</p></Link>
				</div>
			</div>
		</div>
	);
}
