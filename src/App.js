import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-body">
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <img src="/logo.png" alt="Your Logo" width="50" height="50"></img>
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
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
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


    </div>
  );
}

export default App;
