// App.js
import './App.css';
import { scrollToNextSection } from './scrollUtils'; // Import the function
import { scrollToNextSection } from './scrollUtils'; // Import the function


function App() {
    
  return (
    <div className="app-container">
      <section className="main-content">
        <header>
        <a href="https://www.linkedin.com/in/ruwais/" class="fa fa-linkedin"></a>
        </header>
        <h1 className="left-text">Fahad <br />Alotaibi</h1>
        <div className="photo-container">
            <img src="grad.jpg" alt="Photo" />
            <img src="owilly.jpg" alt="Photo" />
            <img src="vball.jpg" alt="Photo" />
        </div>
        <button className="down-arrow-button" onClick={scrollToNextSection}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </button>
      </section>
      
      <aside className="right-content">
          <h1 className="right-text">Cyber <br />Security</h1>
      </aside>

      <div className="white-space"></div>

      <div className="about-me" id="scroll-target"> 
    <h1>Who am I?</h1>
    <button className="down-arrow-button" onClick={scrollToNextSection}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
</div>

      
          <div className="about-us">
              <h1>This is where my story begins; </h1>
              <p>It all started when I decided to take a look on how Minecraft mods work and that got me thinking, What can I do to make something like those people. 
                  Diving into the intricate world of Minecraft mods ignited a spark within me. As I peeled back the layers of code and creativity, 
                  I found myself captivated by the endless potential for innovation. 
                  It wasn't long before a question began to form in my mind, one that would shape my journey moving forward: What unique creation could I craft to leave my mark among these skilled modders?
              </p>
              
              
          
          
      </div>
      <div className="about-us">
      <h1>A little about me;</h1>
              <p>There's an indescribable joy in the rhythm of wheels on tarmac, the whispered secrets of ancient cobblestones, 
                  and the hum of languages unknown. Traveling, for me, is an art form—a symphony of sights, sounds, and sensations that awaken the senses and nourish the soul.

                  Each journey is a narrative waiting to unfold, a story woven from chance encounters, serendipitous moments, 
                  and unexpected detours. Whether I'm navigating the winding alleys of a bustling bazaar or gazing in awe at the vast expanse of an untouched landscape, 
                  every step taken is a step closer to understanding the rich tapestry of humanity and the world we inhabit.
              </p>
      </div>

      <div className="photo-container">
            <img src="05.jpg" alt="Photo" />
            <img src="bakery.jpg" alt="Photo" />
            <img src="collectibles.jpg" alt="Photo" />
        </div>
      <div className="about-me">
          <h1>Projects</h1>
          <button className="down-arrow-button">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
      </div>
      <div className="projects-container">
          <div className="left-half">
              <img src="pi.jpg" alt="Your Photo" />
          </div>
          
          <div className="right-half">
              <div className="left-column">
                  
                  <h1>RFID-BookLibrary v1.0</h1>
                  <p>It allows users to input book information such as name, author, and genre. The script saves this information in text files named after the scanned RFID tag IDs. 
                      When a tag is rescanned, the script retrieves the corresponding book information from the saved file and performs a Google search based on the book's title and author.
                  </p>
                  <p><strong>More</strong> about this project can be found on my <a href= " https://github.com/low-q/RFID-BookLibrary"> GitHub page.</a></p>
              </div>
              
              
              
                  
                  

              
          </div>
      </div>
      {/* New section */}
<div className="projects-container">
    <div className="right-half">
        <div className="left-column">
            <h1>Flipper Zero Evil Twin attack</h1> <br />
            <p>
             Recently, I tried out a project involving an "evil twin" attack on my own home Wi-Fi network, using my own login details. 
             This experience helped me understand 
             how such attacks work and why it's essential 
             to have strong security measures in place to stay safe online.</p>
             <br />
        <p><strong>Credits</strong> goes to: <a href="https://github.com/bigbrodude6119/flipper-zero-evil-portal">bigbrodude6119.</a>
        </p> 
        </div>
        
        
        
            
        
    </div>
    
    <div className="left-half">
        <img src="flipper.jpg" alt="Photo" />
    </div>
</div>
<div className="projects-container">
          <div className="left-half">
              <img src="aws.png" alt="Your Photo" />
          </div>
          
          <div className="right-half">
              <div className="left-column">
                  
                  <h1>Building a 3-tier web application architecture with AWS</h1>
                  <p>Implemented a robust AWS 3-tier architecture for Brainiac's web app, ensuring scalability, availability, and security. This included: <br />

                    <strong>Web Tier:</strong> Deployment of fault-tolerant web servers with Auto Scaling Groups and an Application Load Balancer. <br />

                    <strong>Application Tire:</strong> Establishment of secure backend servers accessed through a Bastion host for seamless communication with the Web Tier. <br />

                    <strong>Database Tier:</strong> Utilization of Amazon RDS with MySQL for secure data management and high availability. <br />
                  
                  </p>
                  <p><strong>More</strong> about this project can be found on my <a href= " https://github.com/low-q/RFID-BookLibrary"> GitHub page.</a></p>
              </div>
              
              
              
                  
                  

              
          </div>
      </div>


      
      
      
      
    </div>
    
    
    
  );
}

export default App;
