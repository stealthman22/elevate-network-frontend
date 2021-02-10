import { Fragment, React } from 'react';
import CallToAction from './elements/CallToAction';
import Footer from './elements/Footer';

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
            <i className="fas fa-user-tie"> Conference Sponsorships</i>
            <p>
              Our flagship conference is the best opportunity
              to connect with and get your brand in front of
              thousands of audience - our team will make sure
              of it.
            </p>
          </div>

          <div className="port-card">
            <i className="fas fa-egg">Incubation Program </i>
            <p>
              Expanding on student’s creative ideas for their
            specific career focus.
            </p>
          </div>

          <div className="port-card">
            <i className="fa fa-users"> Community Partner</i>
            <p>
              An opportunity for industry leaders, mid-market,
              enterprise-level and NGOs organizations to
              educate and engage with our community
              members throughout the year.
            </p>
          </div>

          <div className="port-card">
            <i className="fa fa-calendar"> Custom Events</i>
            <p>
          Our events team is world class. We work with
          partners to host a variety of tailored, custom
          events including themed event series, virtual
          event series, intimate dinners, and more.
            </p>
          </div>

          <div className="port-card">
            <i className="fas fa-handshake"> Community Engagements</i>
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

    <section className="mentees-ctn">
      <h2 className="large text-center text-primary">Mentees</h2>
      <div className="partner-img-ctn">
        <div className="mentee-img-ctn" />
      </div>
      <h3 className="my-2 text-underline text-center">E.N.C Membership</h3>
      <p className="lead  value-hl-text  text-center text-italic">
        The E.N.C Membership is an exceptional, intimate tier of
        extraordinary people who are committed to creating an
        enduring legacy that will impact the world...
      </p>
      <div className="modules-wrapper">
        <div className="partner-card ">
          <p className="text-chunk">
            The Elevate Network Community is designed for
            students who are committed to living life at a level few
            may ever attain.
          </p>
          <p className="text-chunk">
            Limited to an exclusive group of serious students, the
            membership provides the unprecedented opportunity
            to network with and learn from a group of hand-
            picked, highly-talented creatives, innovators and
            entrepreneurs: The Game-Changers.
          </p>
          <p className="text-chunk">
            Members receive exclusive invitations to incredible
            expeditions each year. Mentors and life coaches join
            the members on select trips as they learn, network and
            play in such a diverse way.
          </p>
          <p className="text-chunk">
            Elevate Network Community Membership is an
            opportunity to receive personalized level of coaching
            from our partners and global coaches from the Elevate
            Network Organization not previously available.

          </p>
          <p>
            You
            will have access to attend Elevate Network live events
            whenever you want, as often as you like, anywhere in
            the world- and of course enjoy VIP session in the house.
          </p>
        </div>
      </div>

      <h3 className="my-3 text-underline text-center">Our Unique Benefits</h3>

      <div className="organization">
        <div className="port-card">
          <i className="fas fa-user-tie"> Education</i>
          <p>
          Learn from many global changers at our major
          conferences, onsite programs, meetups as part
          of our global community and through our online
          Program.
          </p>
        </div>

        <div className="port-card">
          <i className="fas fa-egg"> Network</i>
          <p>
          Meet incredible entrepreneurs, innovators,
          artist, investors, changemakers and make real
          relationships with our partners.
          </p>
        </div>

        <div className="port-card">
          <i className="fa fa-users"> Exposure</i>
          <p>
          Tell the world what you are working on by using
          our platform, our reach as your amplifier and our
          global community as your audience.
          </p>
        </div>

      </div>

      <h3 className="my-3 text-underline text-center">Getting into the community</h3>
      <div className="membership-ctn">
        <div className="membership-ctn-left">
          <h4 className="my-3 text-underline text-center">Community Application</h4>
          <div className="membership-ctn-card my-2">
            <h5>INTERVIEW</h5>
            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            200 student capacity with no changes.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            If you don’t meet the deadline or if we are maxed
            on capacity, you will be placed on a waitlist.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            Your membership applies online or through a
            chapter.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            We review your application; respond back in two
            days.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            Set up a meeting for final interview.
              </span>

            </div>
          </div>
        </div>

        <div className="membership-ctn-right">
          <h4 className="my-3 text-underline text-center">Community Acceptance</h4>
          <div className="membership-ctn-card my-2">
            <h5>PAYMENT</h5>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            If accepted, you pay the Community Program
            Membership fee to secure your place.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            Membership fee is $100 dollars per student.
            (Rates will apply on the date you enroll).
              </span>

            </div>
          </div>

          <div className="membership-ctn-card my-2">
            <h5>COMMUNITY PROGRAM ACCESS</h5>
            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            You receive Benefits (at conference) + Community
            Benefits (post conference)
              </span>
            </div>
          </div>

          <div className="membership-ctn-card my-2">
            <h5>MEMBERSHIP RENEWAL/SUBSCRIPTION</h5>
            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            Membership can be renewed annually.
              </span>

            </div>

            <div className="port-card">
              <i className="fas fa-check"> </i>
              {' '}
              {' '}
              <span>
            No refund if you drop out.
              </span>

            </div>
          </div>
        </div>
      </div>

    </section>
    <CallToAction />

    <section className="mentors-ctn">
      <h2 className="large text-center text-primary">Mentors</h2>
    </section>
    <Footer />
  </div>

);

export default Community;

//  Our teams worldwide are
// constantly developing the current programs for our community and adding
// new elements to improve how we deliver to the students and families...
