import React from 'react';
import '../style.css';

export default function Landing() {
	return (
		<div className="landing-screen">
			<div className="middle-container-landing">
				<div className="rent">
					<p>Rent A Book</p>
				</div>
				<img
					className="reader"
					src="https://previews.dropbox.com/p/thumb/ABCvGL7fg7_o-K3EsH-Id6VlptdMcFf3D-3Fl2a_uv9KsB5sFDNOdCo0GZfX0iMfUoKqsJs1SLo43KkoJ7KZZGM90jF3QeFSovWDIFGRKXfpctoSUHFA74_ApXvLOS-smCebFzdHGJ-OsG4tLgVcevILy1MCwQ0fPxeLDxHubaET9NcD_bMkqfHDfFXc4sbTRjmGA8OMJSLtnIkqe4fproaW9LSRqB2mcFB4_188Rv-D_EDthd86_RHzRWyA339UhFBsTrS9jmFm1Kp9jMXXa5YrOFrd4Z0WOhAGkaNU1dTBQyExREbDR02TqnyTnySWN0oGM2Tx9ule2598KZoBO2NyabiwAzXQ9VKpNB-s-kqW-mbOAbilQeJ9g4fxaFT9PQA/p.png?fv_content=true&size_mode=5"
					alt=""
				/>

				<div className="sell">
					<p>Sell Your Book</p>
				</div>
			</div>
		</div>
	);
}
