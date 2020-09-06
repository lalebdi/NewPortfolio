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
import gif1 from '../assets/images/voiceNews.gif';
import gif2 from '../assets/images/cryptoCharts.gif';
import gif3 from '../assets/images/theGram.gif';
import gif4 from '../assets/images/MAP1.0.gif';
import gif5 from '../assets/images/WhatsChat.gif';
import gif6 from '../assets/images/Beatle.gif';
import Scroll from '../components/Scroll';



const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

// Modal.setAppElement('#root');



const IndexPage = () => {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const [ modalIsOpen2, setModalIsOpen2] = useState(false);
  const [ modalIsOpen3, setModalIsOpen3] = useState(false);
  const [ modalIsOpen4, setModalIsOpen4] = useState(false);
  const [ modalIsOpen5, setModalIsOpen5] = useState(false);
  const [ modalIsOpen6, setModalIsOpen6] = useState(false);

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
          Skilled with HTML5, CSS3, JavaScript, npm, React, Gatsby, Redux, SASS, Express, Java, Spring Boot, Maven, Firebase, Node, Auth0, MongoDB, PostgreSQL, MySQL, API, JSON, Git, GitHub, Jupyter, Python, Material UI and Bootstrap.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <button  onClick={ () => setModalIsOpen(true) } className="image fit">
                  <img src={pic2} alt="make awesome projects" />
                </button>
                <header>
                  <h3>Make Awesome Projects</h3>
                </header>
              </article>
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '75vw',
                  height: '75vh'
                }
              }}>
                <div>
                <div className="modal-content">
                <aside className="description">

                  <h1 className="modal-heading">Make Awesome Projects 1.0</h1>
  
                  <p>The first version of this amazing interactive project management tool that I created to help me organize my tasks for in progress projects. M.A.P 2.0 is 75% done and will be release soon with new features such as lists and cards that drag and drop and a completely redisgned UI.</p>
                  <p>Stack : React, Redux, Java, Spring Boot, Axios, Bootstrap, Font-awesome, Classnames, and React Router.</p>
                  <button><a href="https://github.com/lalebdi/MAP1.0" target="_blank">Source Code</a></button>
                  <br/>
                  <button className="live-btn"> <a href="https://github.com/lalebdi/TheGram" target="_blank">Live Site</a></button>
                  </aside>
                  <img className="demo" src={gif4} alt="make awesome projects" />
                  </div>
            
                  <div class="close-container" onClick={ () => setModalIsOpen(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
                  
          
                  </div>
              </Modal>
              <article className="item">
                <button  className="image fit"  onClick={ () => setModalIsOpen2(true) }>
                  <img src={pic3} alt="instagram clone" />
                </button>
                <header>
                  <h3>Leahgram</h3>
                </header>
              </article>
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen2} onRequestClose={ () => setModalIsOpen2(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '70vw',
                  height: '70vh'
                }}}>
                <div>
                <div className="modal-content">
                <aside className="description">
                  <h1 className="modal-heading">LeahGram</h1>
                  <p>An instagram clone. Post and share pics with Firebase as a backend.</p>
                  <p>Stack : React, Auth0, Firebase, Framer Motion, JSON Pretty, and dotenv.</p>
                  <button><a href="https://github.com/lalebdi/TheGram" target="_blank">Source Code</a></button>
                  <br/>
                  <button className="live-btn"><a href="https://github.com/lalebdi/TheGram" target="_blank">Live Site</a></button>
                  </aside>
                  <img className="demo" src={gif3} alt="instagram" />
                  </div>
                  <div class="close-container" onClick={ () => setModalIsOpen2(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
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
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen3} onRequestClose={ () => setModalIsOpen3(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '70vw',
                  height: '70vh'
                }
              }}>
              <div>
                <div className="modal-content">
                <aside className="description">
                  <h1 className="modal-heading">Beatle</h1>
                  <p>A bug tracking tool that I created to help me keep track of bugs in my projects. You can create a bug, issue tickets and keep track of them.</p>
                  <p>To be relased soon.</p>
                  <p>Stack : MERN.</p>
                  <button><a href="https://github.com/lalebdi/TheManhattanProject" target="_blank">Source Code</a></button>
                  </aside>
                  <img className="demo" src={gif6} alt="bug tracking app" />
                  </div>
                  <div class="close-container" onClick={ () => setModalIsOpen3(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
                  </div>
                
              </Modal>
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen4(true)}>
                  <img src={pic5} alt="a chatting app" />
                </button>
                <header>
                  <h3>WhatsChat</h3>
                </header>
              </article>
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen4} onRequestClose={ () => setModalIsOpen4(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '70vw',
                  height: '70vh'
                }
              }}>
              <div>
                <div className="modal-content">
                <aside className="description">
                  <h1 className="modal-heading">WhatsChat</h1>
                  <p>A live chatting app.</p>
                  <p>Stack : React, Socket io, React-Emoji, React-Router, Cors, Node, and Express.</p>
                  <button><a href="https://github.com/lalebdi/chatApp" target="_blank">Source Code</a></button>
                  <br/>
                  <button className="live-btn" ><a href="https://5f529d2bfd13113312e00abd--friendly-borg-6726ab.netlify.app" target="_blank">Live Site </a></button>
                  </aside>
                  <img className="demo" src={gif5} alt="make awesome projects" />
                  </div>
                  <div class="close-container" onClick={ () => setModalIsOpen4(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
                  </div>
              </Modal>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen5(true)}>
                  <img src={pic6} alt="alexa clone" />
                </button>
                <header>
                  <h3>Voice News</h3>
                </header>
              </article>
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen5} onRequestClose={ () => setModalIsOpen5(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '70vw',
                  height: '70vh'
                }
              }}>
              <div>
                <div className="modal-content">
                <aside className="description">
                  <h1 className="modal-heading">Voice News</h1>
                  <p>An Alexa clone. An interactive personal asisting tool to read the news and have a small chat with you.</p>
                  <p>Stack : React, Material-UI, Alan AI, Words-to-Numbers, Classnames, and dotenv.</p>
                  <button><a href="https://github.com/lalebdi/AI" target="_blank">Source Code</a></button>
                  <br/>
                  <button className="live-btn" ><a href="https://5f55304b080cf0e07c62f16a--sad-meninsky-ae278a.netlify.app/" target="_blank"> Live Site </a></button>
                  </aside>
                  <img className="demo" src={gif1} alt="alexa Clone" />
                  </div>
                  <div class="close-container" onClick={ () => setModalIsOpen5(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
                  </div>
              </Modal>
              <article className="item">
                <button className="image fit" onClick={ () => setModalIsOpen6(true)}>
                  <img src={pic7} alt="cryptocurrency charts" />
                </button>
                <header>
                  <h3>CryptoCharts</h3>
                </header>
              </article>
              <Modal closeTimeoutMS={500} isOpen={modalIsOpen6} onRequestClose={ () => setModalIsOpen6(false)} style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                  position: 'absolute',
                  float: 'left',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  width: '70vw',
                  height: '70vh'
                }
              }}>
              <div>
                <div className="modal-content">
                <aside className="description">
                  <h1 className="modal-heading">CryptoCharts</h1>
                  <p>A live cryptocurrency price ticker with saved personal favorites and charts showing the price changes.</p>
                  <p>Stack : React, Fuzzy, Lodash, Moments, HighCharts, and Styled-Components.</p>
                  
                  <button><a href="https://github.com/lalebdi/cryptoCharts" target="_blank">Source Code</a></button>
                  <br/>
                  <button className="live-btn" >Live Site</button>
                  </aside>
                  <img className="demo" src={gif2} alt="Cryptocurrency" />
                  </div>
                  <div class="close-container" onClick={ () => setModalIsOpen6(false)} >
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                        <label class="close">close</label>
                    </div>
                  </div>
                
              </Modal>
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

          <form method="POST" action="https://formspree.io/xdowrjre">
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
