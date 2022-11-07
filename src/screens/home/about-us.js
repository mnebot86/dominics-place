import React from 'react';
import Dinning from '/src/images/home/dinning-area.png';
import Bio from '/src/images/home/placeholder-bio.png';

const AboutUs = () => {
	return (
		<section id="about-us">
			<div>
				<h1>About Us</h1>

				<div className="container">
					<img src={Dinning} alt="Dinning" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur aliquam est a lorem euismod luctus. Maecenas
						eu eros a eros vulputate accumsan. Mauris et gravida
						dolor, ac mollis justo. Curabitur dapibus aliquam
						vehicula. Ut facilisis dui vitae est facilisis, vel
						porta sem molestie. Morbi id turpis at enim egestas
						eleifend eget sed nunc. Vivamus sapien elit, gravida a
						malesuada a, malesuada ac ante. Nunc sed vulputate mi.
						Phasellus volutpat fermentum odio sed luctus. Sed eu
						lorem lorem. Vivamus luctus leo nec ex vestibulum
						eleifend. Interdum et malesuada fames ac ante ipsum
						primis in faucibus.
					</p>
				</div>

				<div className="container">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur aliquam est a lorem euismod luctus. Maecenas
						eu eros a eros vulputate accumsan. Mauris et gravida
						dolor, ac mollis justo. Curabitur dapibus aliquam
						vehicula. Ut facilisis dui vitae est facilisis, vel
						porta sem molestie. Morbi id turpis at enim egestas
						eleifend eget sed nunc. Vivamus sapien elit, gravida a
						malesuada a, malesuada ac ante. Nunc sed vulputate mi.
						Phasellus volutpat fermentum odio sed luctus. Sed eu
						lorem lorem. Vivamus luctus leo nec ex vestibulum
						eleifend. Interdum et malesuada fames ac ante ipsum
						primis in faucibus.
					</p>
					<img src={Bio} alt="Bio" />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
