import { React } from 'react';
import { Link } from 'react-router-dom';
import Hero from './elements/Hero';
import CallToAction from './elements/CallToAction';

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

          <div className="about-text">
            <p className=" lead text-chunk">

              {' '}
              <span className="link-text">
                {' '}
                <Link to="/register">Elevate Network </Link>
                {' '}
              </span>
           Community  is an educational platform
           where students can learn STEM, Art & Design, Entrepreneurship, etc.

            </p>

            <p className=" lead text-chunk">
            Made up of highly
            talented creatives, innovators and entrepreneurs.
            We are all driven by a single goal:
              <span className="emphasis-text"> creating content that will help you succeed.</span>
            </p>

            <p className=" lead text-chunk">
            Our program creates a clear pathway for senior high
            school students and alumni into the industries and
            also connects them to industry experts.

            </p>
            <p className=" lead text-chunk">
              {' '}
                We strive to help students who are
              {' '}
              <span className="emphasis-text"> dedicated to the process of winning </span>
              {' '}
              in anything they want to accomplish.
            </p>

            <p className="lead text-chunk">
            We want students to reach the epitome of what they define as
            success and we know
              <span className="emphasis-text">
                {' '}
                {' '}
our community will boost their
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

          <div className="lead hl-text">
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

      {/*

          <p className="text-chunk">
Life brings challenges and those challenges must be
met with a plan to win against all odds.
Many successful people in the world have mentors.
          </p>

          <p className="text-chunk">
Mentors pave the way for mentees to continue to walk
in their chosen path. They provide personal experiences,
guidance, motivation, role modeling and more
importantly emotional support to their respective students beyond the household or school.
          </p>
          <p className="text-chunk">
They push students to explore different
career or entrepreneurial options,
developing new networks or contacts, identifying
many resources and setting big goals.
          </p>
          <p>
          Students are known to stay within their comfort zones and a mentor
is designed to keep them striving beyond their comfort
zones and exploring new options through, STEM,
Entrepreneurship, Art/Design, and developing stronger emotional intelligence.
          </p>

      <div className="highlight-ctn">
        <div className="highlight-card">
          {' '}
          <p>
Elevate Network Community is an educational
platform where students can learn STEM, Art &
Design, Entrepreneurship, etc. Made up of highly
talented creatives, innovators and entrepreneurs.
We are all driven by a single goal: creating content
that will help you succeed.
          </p>

        </div>
        <div className="highlight-card">
          <p>
            {' '}
Made up of highly
talented creatives, innovators and entrepreneurs.
We are all driven by a single goal: creating content
that will help you succeed.
          </p>
        </div>
        <div className="highlight-card">Lorem ipsum dolor sit amet.</div>
      </div> */}
    </div>
  </>
);
export default Home;
