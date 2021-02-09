import { React } from 'react';
import { Link } from 'react-router-dom';
import Hero from './elements/Hero';
import CallToAction from './elements/CallToAction';
import Footer from './elements/Footer';

const Home = () => (
  <>
    <div className="home-ctn">

      <Hero />

      <div className="about-ctn">
        <h2 className="large text-center text-primary">EN At A Glance</h2>
        <div className="about-wrapper">

          <div className=" about-quote quote text-center medium">
            <p>
              {' '}
              If you want to go far,
              {' '}
              <br />
              {' '}
              go together
              {' '}
              <br />
              <span className="text-italic">... an African proverb</span>
            </p>
          </div>

          <div className=" about-text">
            <p>

              {' '}
              <span className="link-text">
                {' '}
                <Link to="/register">Elevate Network </Link>
                {' '}
              </span>
           Community  is an educational platform
           where students can learn STEM, Art & Design, Entrepreneurship, etc.

            </p>

            <p className="  text-chunk">
            Made up of highly
            talented creatives, innovators and entrepreneurs.
            We are all driven by a single goal:
              <span className="emphasis-text"> creating content that will help you succeed.</span>
            </p>

            <p>
            Our program creates a clear pathway for senior high
            school students and alumni into the industries and
            also connects them to industry experts.

            </p>
            <p className="  text-chunk">
              {' '}
                We strive to help students who are
              {' '}
              <span className="emphasis-text"> dedicated to the process of winning </span>
              {' '}
              in anything they want to accomplish.
            </p>

            <p className=" text-chunk">
            We want students to reach the epitome of what they define as
            success and we know
              <span className="emphasis-text">
                {' '}
                {' '}

            morale and confidence
              </span>
              {' '}
              in fulfilling their life’s purpose.
            </p>

            <p>
            Life brings challenges
            and those challenges must be met with
              <span className="emphasis-text">a plan to win, against all odds.</span>
            </p>
          </div>
        </div>
      </div>
      <CallToAction />
      <div className="values-ctn">
        <h2 className="large text-center text-primary"> Our Values</h2>
        <div className="value-intro">

          <div className="lead hl-text value-hl-text">
            <span className="link-text">
              <Link to="/register">Elevate Network </Link>
              {' '}
            </span>
            {' '}
            is a special place where we all propel the
            fulfillment of potential through faith.
            We take delight in our core
            values from which we develop our brand, culture, and our impact
            strategies. We believe in;
            <p />

          </div>

        </div>
        <div className="value-card-ctn">
          <div className="value-card">
            <div className="value-headline value-headline-1">
              <h3>Empowerment</h3>
            </div>
            <div className="value-card-content">
              <span>
            We empower students to tap
             into their full potential
              </span>
            </div>
          </div>

          <div className="value-card">
            <div className="value-headline value-headline-2"><h3>Co-creation</h3></div>
            <div className="value-card-content">
              <span>
            We co-create long-term positive
            impact in collaboration with all our
            stakeholders full potential
              </span>
            </div>
          </div>

          <div className="value-card">
            <div className="value-headline value-headline-3">
              <h3>Integrity</h3>
            </div>
            <div className="value-card-content">
              <span>
              We adhere to the highest
              standards of moral behavior in all
              our interactions
              </span>
            </div>
          </div>

          <div className="value-card">
            <div className="value-headline value-headline-4">
              <h3>Appreciation</h3>
            </div>
            <div className="value-card-content">
              <span>
            We embody and foster a culture of
            appreciation for one another
              </span>
            </div>
          </div>
          <div className="value-card">
            <div className="value-headline value-headline-5">
              <h3>Trust</h3>
            </div>
            <div className="value-card-content">
              <span>
            We believe in trust as the glue and
            foundation of our relationships
              </span>
            </div>
          </div>
          <div className="value-card">
            <div className="value-headline value-headline-6">
              <h3>Creativity and Innovation</h3>
            </div>
            <div className="value-card-content">
              <span>
            Cultivating a creative, innovative and entrepreneurial culture
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="modules-ctn">
        <h2 className="large text-center text-primary">Our Modules</h2>

        <div className="modules-wrapper">
          <div className="module-card">
            <h4 className="text-center lead"><i className="fas fa-robot"> STEM</i></h4>

            <p className="text-chunk">
            Internationally, there is a strong gender imbalance in
            the STEM fields of science, technology, engineering and
            mathematics. The STEM project aims to help bridge
            that gap through access to education, mentorship
            opportunities and leadership training.
            </p>

            <p>
                Our STEM program
                is a lifetime opportunity for school students to dive into
                the field of STEM (Science, Technology, Engineering,
                Mathematics) subjects alongside their peers and
                develop their leadership skills, in a unique cross-cultural
                environment. The STEM project will focus on Robotics, AI,
                and Programming.
            </p>
          </div>

          <div className="module-card">

            <h4 className="text-center lead">
              {' '}
              <i className="fa fa-paint-brush" aria-hidden="true">ART AND DESIGN</i>
            </h4>
            <p className="text-chunk">
              {' '}
                Art is a profound act of expression, and when it meets
                design, it results in meaningful concepts and objects that
                shape our day-to-day lives.
                              Elevate Network programs are designed to equip school students with a comprehensive
              toolbox, combining traditional skills like drawing and
              sculpting with digital techniques producing high-end
              design work.
            </p>

            <p>
              This program combines art fundamentals
              with the design industry’s current technology – helping
              students expand their artistic talents to create powerful
              imagery for entertainment, advertising, branding, and
            the web.
            </p>
          </div>

          <div className="module-card">
            <h4 className="text-center lead">
              {' '}
              <i className="fas fa-briefcase"> ENTREPRENEURSHIP</i>
            </h4>
            <p className="text-chunk">
              {' '}
              We believe Entrepreneurship is the key to Africa’s
              continuous development. To fulfill this vision for our
              nation and continent, we train students to turn their
              innovative and creative ideas into impactful brands.
            </p>

            <p>
              Based on the type of brand the student is interested in
              starting, we will connect them with an Entrepreneur who
              is already established in that field to teach and provide
              resources. We believe the best way to improve and learn
              is by shadowing someone who is already doing what you
              want to do.
            </p>
          </div>
        </div>
      </div>
      <CallToAction />
      <div className="portfolio-ctn">
        <h2 className="large text-center text-primary">Our Portfolio</h2>
        <div className="portfolio-wrapper">
          <div className="community">
            <h4 className="  text-center ">COMMUNITY SUPPORT</h4>
            <div className="comm-1">
              <div className="port-card">
                <i className="fas fa-lightbulb"> IDEA LAB</i>
                <p>
                  Supporting potential students
                   to develop their ideas into
                actual business.
                </p>
              </div>

              <div className="port-card">
                <i className="fa fa-users" aria-hidden="true"> MENTORING PROGRAMS</i>
                <p>
                Matching community members with skillful and seasoned
                entrepreneurs from various backgrounds.
                </p>
              </div>

              <div className="port-card">
                <i className="fas fa-egg"> INCUBATION</i>
                <p>
                Building students ideas via connections with corporates,
            networks and tailor-made tools
                  {' '}
                  <br />
                  {' '}
                and providing students
                  with the resources they need to make a difference.
                </p>
              </div>
            </div>

            <div className="comm-2">
              <div className="port-card">
                <i className="fas fa-box"> LAUNCH BOX</i>
                <p>
                Collection of training materials from the whole Elevate
                product portfolio
                </p>
              </div>

              <div className="port-card">
                <i className="fas fa-home"> ELEVATE HOUSE</i>
                <p>
                A unique combination of workspace, networking hub, and
                learning environment
                </p>
              </div>

              <div className="port-card">
                <i className="fas fa-shuttle-van"> EXPEDITION</i>
                <p>
              Vehicle for students and ecosystem actors interested in
              learning from each other and accessing new markets
                </p>
              </div>
            </div>
          </div>
          <div className="organization">
            <h4 className="  text-center ">ORGANIZATIONAL SUPPORT</h4>
            <div className="port-card">
              <i className="fas fa-user-tie"> CHAPTER MANAGER MENTOR (CMM)</i>
              <p>
              A tailor-made curriculum promoting the mindset of
              mentoring & empowering chapter managers and
              executives.
              </p>
            </div>

            <div className="port-card">
              <i className="fas fa-comments"> PARENT - TEACHER SEGMENT</i>
              <p>
              Intensive training & solution-oriented curriculum for
              parents and teachers from different sectors.
              </p>
            </div>

            <div className="port-card">
              <i className="fas fa-handshake"> CONSULTING & ADVISORY</i>
              <p>
              Tailor-made services for students, individuals and brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  </>
);
export default Home;
