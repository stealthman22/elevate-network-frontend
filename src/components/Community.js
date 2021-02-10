import { Fragment, React } from 'react';
import CallToAction from './elements/CallToAction';

import characterLogo from '../assets/partner-logos/characters.jpeg';
import lancasterLogo from '../assets/partner-logos/lancaster.png';
import ngahLogo from '../assets/partner-logos/ngah.jpeg';
import nratedLogo from '../assets/partner-logos/rated.PNG';
import runLogo from '../assets/partner-logos/run.jpeg';
import websterLogo from '../assets/partner-logos/webster.svg';

const Community = () => (
  <div className="comm-ctn">
    <section className="comm-hero">
      <div className="overlay">
        <div className="headline">
          <h1>Elevate Network</h1>
          <p className="lead">Inspire, Empower, Achieve</p>
        </div>
        <div className="content">
          <div className=" content-card ">
            <span>

            For years, we’ve
            educated, supported, and
            connected students and
            brands through the best
            in-person experiences
            at local events and
            conferences...

            </span>
          </div>

        </div>
      </div>
    </section>

    <section className="partners-ctn">
      <h2 className="large text-center text-primary">Partners</h2>
      <div className="partner-img-ctn">
        <div className="partner-img" />
      </div>

      <h3 className="my-2 text-underline text-center">The Investors Collective</h3>
      <div className="partner-cards">

        <div className="value-card">
          <div className="value-headline value-headline-5">
            <h3>ENGAGE</h3>
          </div>
          <div className="value-card-content">
            <span>
            ... With E.N.C and gain insights
            into a new generation of
            consumers and future members
            of the workforce.
            </span>
          </div>
        </div>

        <div className="value-card">
          <div className="value-headline value-headline-2"><h3>CONNECT</h3></div>
          <div className="value-card-content">
            <span>
            ... With other investors, big
            thinkers, corporate leaders and
            philanthropists to learn how we
            can have collective impact on
            gender equality.
            </span>
          </div>
        </div>

        <div className="value-card">
          <div className="value-headline value-headline-3">
            <h3>HEAR</h3>
          </div>
          <div className="value-card-content">
            <span>
             ... From global experts and
              changemakers on what’s next in
              building the next generation of
              future leaders.
            </span>
          </div>
        </div>

        <div className="value-card">
          <div className="value-headline value-headline-1">
            <h3>SHARE</h3>
          </div>
          <div className="value-card-content">
            <span>
            ... Your unique perspectives and
            questions through meaningful
            dialogues with peers and young
            leaders.
            </span>
          </div>
        </div>

        <div className="value-card">
          <div className="value-headline value-headline-6">
            <h3>SEE</h3>
          </div>
          <div className="value-card-content">
            <span>
            ... Elevate Network
            transformational leadership
            development programming in
            action and be inspired by this
            generation of changemakers.
            </span>
          </div>
        </div>
      </div>

      <div className="partners-logo-ctn">
        <h3 className="my-2 text-underline text-center">Previous Partners</h3>
        <div className="lead  value-hl-text">
          <p className="text-center">Here are some of our previous Partners and Sponsors:</p>
        </div>
        <div className="logo-wrapper">
          <img src={characterLogo} alt="" className="partner-logo" />
          <img src={lancasterLogo} alt="" className="partner-logo" />
          <img src={ngahLogo} alt="" className="partner-logo" />
          <img src={runLogo} alt="" className="partner-logo" />
          <img src={nratedLogo} alt="" className="partner-logo" />
          <img src={websterLogo} alt="" className="partner-logo" />
        </div>
      </div>

      <div className="new-partners">
        <h3 className="my-2 text-underline text-center">Enabling New Partnerships</h3>
        <div className="modules-wrapper">
          <div className="partner-card ">
            <p className="text-chunk">
            With years of combined experience in events,
             marketing, partnerships and community building, our
              partnership team is unique to any other. We know
              what it takes to bring a brand to life on-site at events
              while creating tangible results, meaningful experiences,
              and immediate impact. Each year, we produce flagship
              conferences and other programs with our partners
              top of mind and we think you’ll see that from your first
              meeting with us.
            </p>
            <p>
          We’re hyper-organized, diversely creative, and results-
          driven. If you’re a forward-thinking organization looking
          to engage with next generation, global community,
          international speakers, brands and global innovators,
          Elevate Network is for you. Tell us your goals and
          together we’ll craft a unique and unforgettable
          experience with Elevate Network.
            </p>
          </div>
        </div>
      </div>

      <div className="academic-partners">
        <h3 className="my-2 text-underline text-center">Academic Partnerships</h3>
        <div className="modules-wrapper">
          <div className="partner-card">
            <p className="text-chunk">
            One of the strongest tools for empowerment is education.
            While we developed our constantly growing portfolio
            of products, learning opportunities via horizontal and
            vertical exchange are at the core of everything we do.
            This means we are relying on and applying existing
            methodologies, as well as creating our own tools and
            interpretations of how learning and exchange can and
            should take place in the 21st century with our special
            focus on entrepreneurship.
            </p>
            <p>
            Fortunately, this philosophy opened new areas for
            cooperation with academic partners.
            The overall goal is to establish partnerships with
            faculties and centres that focus on the development of
            entrepreneurship, STEM and Arts & Design.
            </p>
          </div>
        </div>
      </div>

      <div className="partner-benefits-ctn">
        <h3 className="my-2 text-underline text-center">Our Unique Benefits</h3>
        <p className="lead  value-hl-text  text-center">
        A few of  top partnerships offerings include but are not limited to:
        </p>
        <div className="organization">
          <div className="port-card">
            <i className="fas fa-user-tie"> CONFERENCE SPONSORSHIP</i>
            <p>
              Our flagship conference is the best opportunity
              to connect with and get your brand in front of
              thousands of audience - our team will make sure
              of it.
            </p>
          </div>

          <div className="port-card">
            <i className="fas fa-egg"> INCUBATION PROGRAM</i>
            <p>
              Expanding on student’s creative ideas for their
            specific career focus.
            </p>
          </div>

          <div className="port-card">
            <i className="fa fa-users">COMMUNITY PARTNER</i>
            <p>
              An opportunity for industry leaders, mid-market,
              enterprise-level and NGOs organizations to
              educate and engage with our community
              members throughout the year.
            </p>
          </div>

          <div className="port-card">
            <i className="fa fa-calendar">CUSTOM EVENTS</i>
            <p>
          Our events team is world class. We work with
          partners to host a variety of tailored, custom
          events including themed event series, virtual
          event series, intimate dinners, and more.
            </p>
          </div>

          <div className="port-card">
            <i className="fas fa-handshake"> COMMUNITY ENGAGEMENT</i>
            <p>
              Connect to the largest students community. Our
              chapter ecosystem includes high schools and
              universities across the country. Leverage our
              community platform to get your brand in front of
              regionally-targeted groups.
            </p>
          </div>
        </div>

      </div>
    </section>
    <CallToAction />
  </div>

);

export default Community;

//  Our teams worldwide are
// constantly developing the current programs for our community and adding
// new elements to improve how we deliver to the students and families...
