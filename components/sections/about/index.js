import { Element, Link } from 'react-scroll';
import banner_img from '../../../public/assets/banner/about.svg';
import Image from 'next/image';

function About() {
  return (
    <Element name='my-about-section'>
      <section className='about_area section_gap' id='about'>
        <div className='container'>
          <div className='row justify-content-start align-items-center'>
            <div className='col-lg-5'>
              <div className='about_img'>
                <Image src={banner_img} alt='about-image' />
              </div>
            </div>
            <div className='offset-lg-1 col-lg-5'>
              <div className='main_title text-left'>
                <h2>
                  let me{` `}
                  <br />
                  Introduce myself
                </h2>
                <p>
                  I am a backend developer experienced in NodeJS and ReactJS. I love to build system
                  architectures and play with databases & networks. Apart from backend development,
                  I love to build frontend applications which can be integrated securely with
                  backend systems.
                </p>
                <p>
                  I have recently started exploring the world of Data Engineering. The world of data
                  is fascinating and I am trying to get my hands dirty with it. Trino - Distributed
                  SQL Query Engine; I am exploring this technology and trying to integrate Trino
                  with Apache Ranger for data governance. I love to clone big data architectures
                  locally and play with docker containers.
                </p>
                <Link
                  className='primary_btn'
                  href='#contact'
                  data-toggle='dropdown'
                  role='button'
                  aria-expanded='false'
                  to='my-contact-section'
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <span>get in touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
