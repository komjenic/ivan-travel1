import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    return (
          <div>
            <header className='site-header'>
                <div className='wrapper'>
                    <div className='site-header__logo'>
                        <div className='site-header__logo__graphic icon icon--clear-view-escapes'>Clear View Escapes</div>
                    </div>

                    <div className='site-header__menu-icon'>
                        <div className='site-header__menu-icon__middle'></div>
                    </div>

                    <div className='site-header__menu-content'>
                        <div className='site-header__btn-container'>
                            <a href='#' className='btn open-modal'>
                                Get in Touch
                            </a>
                        </div>
                        <nav className='primary-nav primary-nav--pull-right'>
                            <ul>
                                <li>
                                    <a href='#our-beginning' id='our-beginning-link'>
                                        Our Beginning
                                    </a>
                                </li>
                                <li>
                                    <a href='#features' id='features-link'>
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href='#testimonials' id='testimonials-link'>
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="large-hero">

              <picture>
                <source srcSet="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w" media="(min-width: 1380px)" />
                <source srcSet="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w" media="(min-width: 990px)" />
                <source srcSet="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)" />
                <img srcSet="assets/images/hero--smaller.jpg 640w, assets/images/hero--smaller-hi-dpi.jpg 1280w" alt="Coastal view of ocean and mountains" className="large-hero__image"/>
              </picture>

              <div className="large-hero__text-content">
                <div className="wrapper">
                  <h1 className="large-hero__title">Your clarity.</h1>
                  <h2 className="large-hero__subtitle">One trip away.</h2>
                  <p className="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>
                  <p><a href="#" className="btn btn--orange btn--large open-modal">Get Started Today</a></p>
                </div>
                </div>
            </div>


            <div id="our-beginning" className="page-section" data-matching-link="#our-beginning-link">
              <div className="wrapper">
                <h2 className="headline headline--centered headline--light headline--b-margin-small">The first trip we planned <strong>was our own.</strong></h2>
                <h3 className="headline headline--centered headline--orange headline--small headline--narrow headline--light headline--b-margin-large">Ever since, we&rsquo;ve been working to make travel <strong>better for everyone.</strong></h3>

                <div className="wrapper wrapper--medium wrapper--b-margin">
                  <img className="lazyload" sizes="(min-width: 970px) 976px, 100vw" srcSet="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street." />
                </div>

                <div className="row row--gutters">
                  <div className="row__medium-4 row__medium-4--larger row__b-margin-until-medium">
                    <picture>
                      <source sizes="404px" srcSet="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)" />
                      <source sizes="320px" srcSet="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)" />
                      <img className="lazyload" srcSet="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe" />
                    </picture>
                  </div>
                  <div className="row__medium-8 row__medium-8--smaller">
                    <div className="generic-content-container">
                      <h2 className="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum velit esse cillum <strong>dolore eu fugiat.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="features" className="page-section page-section--blue" data-matching-link="#features-link">
              <div className="wrapper">
                <h2 className="section-title"><span className="icon icon--star section-title__icon"></span> Our <strong>Features</strong></h2>

                <div className="row row--gutters-large generic-content-container">
                  
                  <div className="row__medium-6">

                    <div className="feature-item">
                      <span className="icon icon--rain feature-item__icon"></span>
                      <h3 className="feature-item__title">We&rsquo;ll Watch the Weather</h3>
                      <p>Download our app and we&rsquo;ll send you a notice if it&rsquo;s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.</p>
                    </div>

                    <div className="feature-item">
                      <span className="icon icon--globe feature-item__icon"></span>
                      <h3 className="feature-item__title">Global Guides</h3>
                      <p>We&rsquo;ve scoured the entire planet for the best retreats and beautiful vistas. If there&rsquo;s a corner of the world you want to escape to we know the most scenic and inspiring locations.</p>
                    </div>
                  </div>

                  <div className="row__medium-6">
                    <div className="feature-item">
                      <span className="icon icon--wifi feature-item__icon"></span>
                      <h3 className="feature-item__title">Wi-Fi Waypoints</h3>
                      <p>We only send you on trips to places we can personally vouch for as being amazing. Which means we&rsquo;ve mapped out where local wi-fi spots are and marked them in our app&rsquo;s map view.</p>
                    </div>

                    <div className="feature-item">
                      <span className="icon icon--fire feature-item__icon"></span>
                      <h3 className="feature-item__title">Survival Kit</h3>
                      <p>Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div id="testimonials" className="page-section page-section--no-b-padding-until-large page-section--testimonials lazyload" data-matching-link="#testimonials-link">
              <div className="wrapper wrapper--no-padding-until-large">
                <h2 className="section-title section-title--blue"><span className="icon icon--comment section-title__icon"></span> Real <strong>Testimonials</strong></h2>

                <div className="row row--gutters row--equal-height-at-large row--gutters-small row--t-padding generic-content-container">
                  <div className="row__large-4">
                    <div className="testimonial">
                      <div className="testimonial__photo">
                        <img className="lazyload" sizes="160px" srcSet="assets/images/testimonial-jane.jpg 160w, assets/images/testimonial-jane-hi-dpi.jpg 320w" alt="Jane Doe" />
                      </div>
                      <h3 className="testimonial__title">Jane Doe</h3>
                      <h4 className="testimonial__subtitle">9 Time Escaper</h4>
                      <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
                    </div>
                  </div>

                  <div className="row__large-4">
                    <div className="testimonial">
                      <div className="testimonial__photo">
                        <img className="lazyload" sizes="160px" srcSet="assets/images/testimonial-john.jpg 160w, assets/images/testimonial-john-hi-dpi.jpg 320w" alt="John Smith" />
                      </div>
                      <h3 className="testimonial__title">John Smith</h3>
                      <h4 className="testimonial__subtitle">4 Time Escaper</h4>
                      <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;</p>
                    </div>
                  </div>

                  <div className="row__large-4">
                    <div className="testimonial testimonial--last">
                      <div className="testimonial__photo">
                        <img className="lazyload" sizes="160px" srcSet="assets/images/testimonial-cat.jpg 160w, assets/images/testimonial-cat-hi-dpi.jpg 320w" alt="Cat McKitty" />
                      </div>
                      <h3 className="testimonial__title">Cat McKitty</h3>
                      <h4 className="testimonial__subtitle">6 Time Escaper</h4>
                      <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <footer className="site-footer">
              <div className="wrapper">
                <p><span className="site-footer__text">Copyright &copy; 2019 Clear View Escapes. All rights reserved.</span> <a href="#" className="btn btn--orange open-modal">Get in Touch</a></p>
              </div>
            </footer>


            <div className="modal">
              <div className="modal__inner">
                <h2 className="section-title section-title--blue section-title--less-margin"><span className="icon icon--mail section-title__icon"></span> Get in <strong>Touch</strong></h2>
              <div className="wrapper wrapper--narrow">
                <p className="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
              </div>

              <div className="social-icons">
                <a href="#" className="social-icons__icon"><span className="icon icon--facebook"></span></a>
                <a href="#" className="social-icons__icon"><span className="icon icon--twitter"></span></a>
                <a href="#" className="social-icons__icon"><span className="icon icon--instagram"></span></a>
                <a href="#" className="social-icons__icon"><span className="icon icon--youtube"></span></a>
              </div>
              </div>
              <div className="modal__close">X</div>
            </div>


        </div>
    );
}

export default App;
