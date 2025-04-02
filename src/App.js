import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-body">
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <img src={`${process.env.PUBLIC_URL}/EQlogo.png`} alt="Your Logo" width="50" height="50"></img>
            </a>
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 turq">
            <li><a href="#" class="nav-link px-3 link-secondary ">Home</a></li>
            <li><a href="#" class="nav-link px-3 turq">Our Offerings</a></li>
            <li><a href="#" class="nav-link px-3 turq">Why Choose Us</a></li>
            <li><a href="#" class="nav-link px-3 turq">Pricing</a></li>
            <li><a href="#" class="nav-link px-3 turq ">Contact Us</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2 btn-turq">Login</button>
            <button type="button" class="btn btn-primary btn-turq">Sign-up</button>
          </div>
        </header>
      </div>

      <div class="background-container">
        <div class="overlay">
          {/* <div class="banner-text">
                  <h2 class="black"> Place holder Banner Swapping ? Carasoul?</h2>
                  <button>Contact Us Now</button>
                  <h4>OR</h4>
                  <button>Find Out More</button>
                </div> */}
        </div>
      </div>

      <div class="content">
        <h2 class="spacing ">Welcome to <span class="turq">EduQube's</span> Comprehensive Content Creation and Communication Strategy</h2>
        <h4 class="spacing">Our tailored approach is designed to elevate your brand's presence and engagement through expertly crafted branding,
          engaging social media content with dynamic marketing.  </h4>
        <h5 class="spacing turq">#EduQubes #LearningRevolution #EducationForAll #InnovateLearnSucceed</h5>
      </div>
      <br></br>
      <hr></hr>
      <h3 class="content spacing turq">PodCast / post Previews</h3>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 side-spacing">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('pod1.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <i class="fa-solid fa-music"></i>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('pod2.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <i class="fa-solid fa-music"></i>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>World Health</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('pod5.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <i class="fa-solid fa-music"></i>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>South Africa</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>

      <div class="content">
        <h1 class="turq"> Our Offerings</h1>
        <p>Our services include content creation, audience targeting, analytics tracking, and strategic social media
          campaigns. With a focus on engaging storytelling, high-quality visuals, and audience interaction, we partner
          with businesses to establish a strong digital presence.</p>
        <p>Having a well-planned marketing strategy is crucial for standing out in a competitive market.</p>
        <p>Without a strategy, social media efforts can feel directionless and ineffective. A structured approach
          ensures that content resonates with the target audience, maximizes reach, and drives meaningful interactions—ultimately
          leading to increased brand loyalty and sales.</p>
        <p>Our expertise in social media analytics allows us to continuously refine strategies.</p>
        <p>EduQube’s clients benefit from data-driven insights, creative execution, and a results-focused approach that ensures
          their brand doesn't just participate in the online conversation but dominates it.</p>
      </div>

      <div>
        <div className="container px-4 py-5" id="icon-grid">
          <h2 className="pb-2 border-bottom turq center-text">Pricing Idea</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
              <i className="fas fa-cogs text-body-secondary flex-shrink-0 me-3 turq" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Social Media Marketing</h3>
                <p>Empowering your brand with data-driven strategies, innovative content, and cutting-edge digital solutions.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-laptop-code text-body-secondary flex-shrink-0 me-3 turq" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis ">Creating podcasts and audio files</h3>
                <p>Podcast production, *creating and maintaining podcast channel</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-calendar-alt text-body-secondary flex-shrink-0 me-3 turq" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Content research and writing</h3>
                <p>Expert content research and writing tailored to engage, inform, and drive results.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-home text-body-secondary flex-shrink-0 me-3 turq" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Development & Graphic Design</h3>
                <p>Custom systems, applications, impactful graphic design and websites tailored to your business needs.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-tachometer-alt text-body-secondary flex-shrink-0 me-3" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis turq">Online marketing</h3>
                <p> <strong>Email</strong> Campaigns and / or <strong>Whatsapp</strong> Channel creation, newsletters & automation.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-toggle-on text-body-secondary flex-shrink-0 me-3" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis turq">Surveys</h3>
                <p>Strategic survey campaigns designed to gather insights and drive informed decisions.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-map-marker-alt text-body-secondary flex-shrink-0 me-3" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fas fa-tools text-body-secondary flex-shrink-0 me-3" style={{ fontSize: "1.75em" }}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="call-to-action" class="call-to-action section dark-background">

        <div class="container">
          <br></br>
          <div class="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-xl-9 text-center text-xl-start">
              <h3 class="turq">Call To Action</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <br></br>
        </div>

      </section>
      <br></br>
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

      <br></br>
      <br></br>
      <div>
        <section id="contact" class="contact section">
          <div class="container section-title aos-init aos-animate center-text" data-aos="fade-up">
            <h2 class="turq center-text">Contact</h2>
            <h3 class="turq center-text">Your Partner in Innovation + Integration</h3>
            <br></br>
            <p>Transform your business with in-person or virtual opportunities designed to maximise your global accessibility to LifeQube’s
              full spectrum of insight, expert guidance and tools. Get what you need, when — and how — you need it.</p>
          </div>
          <br></br>

          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <img src={`${process.env.PUBLIC_URL}/qr.png`} alt="Image 1" style={{ width: '150px', height: '150px', marginRight: '15px' }} />
                <p class="turq">Join the EDUQUBE community on LinkedIN</p>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <img src={`${process.env.PUBLIC_URL}/qr.png`} alt="Image 2" style={{ width: '150px', height: '150px', marginRight: '15px' }} />
                <p class="turq">Join the EDUQUBE community on our Whatsapp channel</p>
              </div>
            </div>
          </div>
          <br></br>
          <div class="container aos-init aos-animate contact-container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4">

              <div class="col-lg-5">

                <div class="info-wrap">
                  <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3 class="turq">Address</h3>
                      <p>6 Sturdee Avenue, Rosebank,
                        Johannesburg, 2196, South Africa</p>
                    </div>
                  </div>

                  <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3 class="turq">Call Us</h3>
                      <p>+27 11 912 1000</p>
                      <p>www.lifeqube.co.za</p>
                    </div>
                  </div>

                  <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3 class="turq">Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <div>
                      <h3 class="turq">Follow Us</h3>
                      <p>
                        <a href="https://www.instagram.com/yourusername" class="anchor" target="_blank">
                          <i class="bi bi-instagram" style={{ width: '150px', height: '150px', marginRight: '15px' }}></i>
                          Instagram
                        </a>
                      </p>
                    </div>
                  </div>
                  <iframe class="imap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4285.673663115493!2d28.039485100000004!3d-26.1478809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c8d03d46401%3A0x93167701f9ade102!2s6%20Sturdee%20Ave%2C%20Rosebank%2C%20Johannesburg%2C%202196!5e1!3m2!1sen!2sza!4v1743632697291!5m2!1sen!2sza"
                    frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              <div class="col-lg-7">
                <form action="forms/contact.php" method="post" class="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <div class="row gy-4">

                    <div class="col-md-6">
                      <label for="name-field" class="pb-2">Your Name / Company Name</label>
                      <input type="text" name="name" id="name-field" class="form-control" required="" />
                    </div>

                    <div class="col-md-6">
                      <label for="email-field" class="pb-2">Your Email</label>
                      <input type="email" class="form-control" name="email" id="email-field" required="" />
                    </div>

                    <div class="col-md-12">
                      <label for="Industry-field" class="pb-2">Industry</label>
                      <input type="text" class="form-control" name="Industry" id="Industry-field" required="" />
                    </div>
                    <div class="col-md-12">
                      <label for="subject-field" class="pb-2">Subject</label>
                      <input type="text" class="form-control" name="subject" id="subject-field" required="" />
                    </div>

                    <div class="col-md-12">
                      <label for="message-field" class="pb-2">Message</label>
                      <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <div class="sent-message pb-2">We will be in contact with you shortly</div>

                      <button class="btn-turq btn btn-primary me-2" type="submit">Send Message</button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

          </div>

        </section>
      </div>

    </div>
  );
}

export default App;
