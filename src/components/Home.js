import { React } from 'react';
import Hero from './elements/Hero';

const Home = () => (
  <>
    <div className="home-ctn">

      <Hero />
      <div className="values-ctn">
        <h1 className="large text-center text-primary">Values</h1>

        <div className="value-card">
          <div className="value-card-img vci-1" />
          <div className="value-card-content">
            <span>
            We empower students to tap
             into their
              {' '}
              <br />
              {' '}
               full potential
            </span>
          </div>
        </div>

        <div className="value-card">
          <div className="value-card-img vci-1" />
          <div className="value-card-content">
            <span>
            We co-create long-term positive
impact in collaboration with all our
stakeholders
              {' '}
              <br />
              {' '}
               full potential
            </span>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  </>
);
export default Home;
