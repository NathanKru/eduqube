import React from 'react';

const Offerings = () => {
  return (
<div>
        <div class="container">
            <h2 className="pb-2 turq center-text pb-2">Our Offerings</h2>
          <div class="row gy-4 align-items-center features-item">
            <div class="col-md-5 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
              <img src={`${process.env.PUBLIC_URL}/den1.jpg`} class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <h4>Tailored social media marketing solutions designed to enhance brand visibility, engagement, and lead generation. </h4>
              <p class="fst-italic">
              Our services include content creation, audience targeting, analytics tracking, and strategic social media campaigns. With a focus on engaging storytelling, high-quality visuals, and audience interaction, we partner with businesses to establish a strong digital presence.
              Having a well-planned marketing strategy is crucial for standing out in a competitive market. 
              </p>
              <ul>
                <li><i class="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i class="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i class="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
              </ul>
            </div>
          </div>
          <br></br>
            <hr></hr>
            <br></br>
          <div class="row gy-4 align-items-center features-item">
            <div class="col-md-5 order-1 order-md-2 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
              <img src={`${process.env.PUBLIC_URL}/den2.jpg`} class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 order-2 order-md-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h3>Heading</h3>
              <p class="fst-italic">
              Without a strategy, social media efforts can feel directionless and ineffective. A structured approach ensures that content resonates with the target audience, maximizes reach, and drives meaningful interactions—ultimately leading to increased brand loyalty and sales. 
              Our expertise in social media analytics allows us to continuously refine strategies. 
              </p>
              <p>EduQube’s clients benefit from data-driven insights, creative execution, and a results-focused approach that 
              ensures their brand doesn't just participate in the online conversation but dominates it. .</p>
            </div>
          </div>
            <br></br>
          <div class="row gy-4 align-items-center features-item">
            <div class="col-md-5 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out">
              <img src={`${process.env.PUBLIC_URL}/den1.jpg`} class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 aos-init aos-animate" data-aos="fade-up">
              <h3 class="turq pb-2">We don’t just create content—we strategically craft high-impact marketing solutions that drive real results.</h3>
              <p>With a focus on thoughtful planning, high-quality visuals, and compelling storytelling, we ensure your brand
                 not only stands out but also resonates with your audience. </p>
                <p>
                Our expertise lies in delivering engaging, results-driven content that positions your business ahead of the competition 
                in an ever-evolving digital landscape.</p>
            </div>
          </div>
          <br></br>
            <br></br>
          <h2 className="pb-2 turq center-text pb-2">“Exceptional ideas delivered with exceptional service”</h2>

        </div>
      </div>
  );
};

export default Offerings;