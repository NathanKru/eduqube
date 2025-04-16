import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;