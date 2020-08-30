import React,{ useState } from 'react';
import Modal from 'react-modal';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic7.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';




const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];



const IndexPage = () => {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const [ modalIsOpen2, setModalIsOpen2] = useState(false);
  const [ modalIsOpen3, setModalIsOpen3] = useState(false);
  const [ modalIsOpen4, setModalIsOpen4] = useState(false);
  const [ modalIsOpen5, setModalIsOpen5] = useState(false);

  return(
    
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Leah</strong>,
              <br />
              Motivated Full Stack Web Developer. I design efficient and responsive web apps 
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
          Determined, quick learner with strong interpersonal skills and proven ability to manage positive and productive projects, problem solver.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <button  onClick={ () => setModalIsOpen(true) } className="image fit">
                  <img src={pic2} alt="" />
                </button>
                <header>
                  <h3>Make Awesome Projects</h3>
                </header>
              </article>
              <Modal isOpen={modalIsOpen}>
                <div>
                  <h1>I am the modal</h1>
                  <button onClick={ () => setModalIsOpen(false)}>Close</button>
                  </div>
              </Modal>
              <article className="item">
                <button  className="image fit"  onClick={ () => setModalIsOpen2(true) }>
                  <img src={pic3} alt="" />
                </button>
                <header>
                  <h3>Leahgram</h3>
                </header>
              </article>
              <Modal isOpen={modalIsOpen2}>
                <div>
                  <h1>I am the modal 2</h1>
                  <p> right </p>
                  <button onClick={ () => setModalIsOpen2(false)}>Close</button>
                  </div>
              </Modal>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen3(true)}>
                  <img src={pic4} alt="Beatle" />
                </button>
                <header>
                  <h3>Beatle</h3>
                </header>
              </article>
              <Modal isOpen={modalIsOpen3}>
                <div>
                  <h1>I am the modal 3</h1>
                  <p> true </p>
                  <button onClick={ () => setModalIsOpen3(false)}>Close</button>
                  </div>
              </Modal>
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen4(true)}>
                  <img src={pic5} alt="" />
                </button>
                <header>
                  <h3>WhatsChat</h3>
                </header>
              </article>
              <Modal isOpen={modalIsOpen4}>
                <div>
                  <h1>I am the modal 4</h1>
                  <p> yup </p>
                  <button onClick={ () => setModalIsOpen4(false)}>Close</button>
                  </div>
              </Modal>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen5(true)}>
                  <img src={pic6} alt="" />
                </button>
                <header>
                  <h3>Voice News</h3>
                </header>
              </article>
              <Modal isOpen={modalIsOpen5}>
                <div>
                  <h1>I am the modal 5</h1>
                  <p> five </p>
                  <button onClick={ () => setModalIsOpen5(false)}>Close</button>
                  </div>
              </Modal>
              <article className="item">
                <button className="image fit">
                  <img src={pic7} alt="" />
                </button>
                <header>
                  <h3>CryptoCharts</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
          An enthusiastic and hardworking software developer. Worked on different projects that helped me adapt to changes quickly and efficiently. A healthcare professional with excellent public speaking skills and teamwork. 
          </p>
          <br />
          <h2>My Methodology</h2>
              <br />
              I start with exploring by putting myself in your user's shoes to understand their needs. Then, I move to planning where I define the framework and formalize the project. After, I generate several ideas to work the challenges. Later, I design and create an interactice prototype. Lastly, I test and deploy.
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            If you need to get additional inormation about my services or projects, please feel free to fill the form below, send an email or conatct me via LinkedIn. I am incredibly responsive and value your questions.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);
}

export default IndexPage;
