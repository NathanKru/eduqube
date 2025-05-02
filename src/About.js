import React from 'react';

const About = () => {
	return (
		<div>
			<div class="background-container3">
			</div>

			{/* <section class="py-5">


	<div class="container">
		<div class="row">
			<div class="col-md-5">
				<span class="text-muted turq" >About Us</span>
				<h2 class="display-5 fw-bold">Who We Are</h2>
			</div>
			<div class="col-md-6 offset-md-1">
				<p class="lead"> EduQube is the innovation arm of LifeQube, crafted to serve forward-thinking businesses and educational brands looking to elevate their voice. 
                    With years of digital strategy, tech development, and creative content under our belt, we empower brands with real growth.</p>
			</div>
		</div>
	</div>
    <br></br>
    <br></br>
    <div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="text-center">
					<h3 class="display-7  turq">Our Mission:</h3>
					<p class="lead">To turn communication into conversion—through strategy, story, and software.</p>
				</div>
			</div>
		</div>
	</div>

    <br></br>
    <br></br>
    <div class="container">
		<div class="row">
			<div class="col-md-5">
				<span class="text-muted turq" >About Us</span>
				<h2 class="display-6 fw-bold">Meet the Team:</h2>
			</div>
			<div class="col-md-6 offset-md-1">
				<p class="lead"> EduQube is the innovation arm of LifeQube, crafted to serve forward-thinking businesses and educational brands looking to elevate their voice. 
                    With years of digital strategy, tech development, and creative content under our belt, we empower brands with real growth.</p>
			</div>
		</div>
	</div>
</section> */}

			<div>
				<section class="py-5">
					<div class="container">
						<div class="row align-items-center gx-4">
							<div class="col-md-5">
								<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src={`${process.env.PUBLIC_URL}/eq4.png`}></img></div>
							</div>
							<div class="col-md-6 offset-md-1">
								<div class="ms-md-2 ms-lg-5">
									<span class="text-muted">Our Story</span>
									<h2 class="display-5 fw-bold">About Us</h2>
									<p class="lead">EduQube is the innovation arm of LifeQube, crafted to serve forward-thinking businesses and educational brands looking to elevate their voice.
										With years of digital strategy, tech development, and creative content under our belt, we empower brands with real growth.</p>
									<p class="lead mb-0"></p>
								</div>
							</div>
						</div>
					</div>
					<br></br>
					<div class="container">
						<div class="row align-items-center gx-4">
							<div class="col-md-6 offset-md-1">
								<div class="ms-md-2 ms-lg-5">
									<h2 class="display-5 fw-bold">Our Mission</h2>
									<p class="lead">To turn communication into conversion—through strategy, story, and software..</p>
									<p class="lead mb-0"></p>
								</div>
							</div>
							<div class="col-md-5">
								<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src={`${process.env.PUBLIC_URL}/eq1.png`}></img></div>
							</div>
						</div>
					</div>
					<br></br>
					<div class="container">
						<div class="row align-items-center gx-4">
							<div class="col-md-5">
								<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src={`${process.env.PUBLIC_URL}/eq4.png`}></img></div>
							</div>
							<div class="col-md-6 offset-md-1">
								<div class="ms-md-2 ms-lg-5">
									<span class="text-muted">Our Story</span>
									<h2 class="display-5 fw-bold">Meet the Team:</h2>
									<p class="lead">EduQube is the innovation arm of LifeQube, crafted to serve forward-thinking businesses and educational brands looking to
										elevate their voice. With years of digital strategy, tech development, and creative content under our belt,
										we empower brands with real growth.</p>
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>
		</div>
	);
};

export default About;