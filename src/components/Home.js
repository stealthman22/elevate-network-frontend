import { React } from 'react';
import { Link } from 'react-router-dom';
import Hero from './elements/Hero';

const Home = () => (
  <>
    <div className="home-ctn">

      <Hero />

      <div className="about-ctn">
        <h2 className="large text-center text-primary">EN At A Glance</h2>
        <div className="about-wrapper">
          <blockquote className="text-center medium">
            <p>
              {' '}
If you want to go far,
              {' '}
              <br />
              {' '}
go together
              {' '}
              <br />
... an African proverb
            </p>
          </blockquote>
          <div className="about-img" />
          <div className="about-text">
            <p className="text-chunk">
          The
              {' '}
              <span className="link-text">
                {' '}
                <Link to="/register">Elevate Network </Link>
                {' '}
              </span>
          Community is a unique and
        premier program designed to help students level up
        academically, personally and professionally. What makes
the community unique stands with the diverse group of
people beginning with partners, mentors etc.
              {' '}
            </p>

            <p className="text-chunk">
We strive to help students who are dedicated to the process of
winning in anything they want to accomplish.
We want students to reach their epitome of what they define as
success and we know our community will boost their
morale and confidence in fulfilling their life’s purpose.
            </p>

          </div>
        </div>
      </div>

      <div className="values-ctn">
        <h2 className="large text-center text-primary"> Our Values</h2>
        <div className="value-intro">

          <div className="hl-text lead">
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
            Cultivating a creative, innovative
and entrepreneurial culture
            </span>
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
