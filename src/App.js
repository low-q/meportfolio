// App.js
import './App.css';

function App() {
  return (
    <div className="app-container">
      <section className="main-content">
        <h1 className="left-text">Fahad <br />Alotaibi</h1>
        <div className="photo-container">
            <img src="grad.jpg" alt="Photo" />
            <img src="owilly.jpg" alt="Photo" />
            <img src="vball.jpg" alt="Photo" />
        </div>
        <button className="down-arrow-button">
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
          <button className="down-arrow-button">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
      </div>

      <div className="split-container">
          <div className="left-column">
              <h1>This is where my story begins; </h1>
              <p>It all started when I decided to take a look on how Minecraft mods work and that got me thinking, What can I do to make something like those people. 
                  Diving into the intricate world of Minecraft mods ignited a spark within me. As I peeled back the layers of code and creativity, 
                  I found myself captivated by the endless potential for innovation. 
                  It wasn't long before a question began to form in my mind, one that would shape my journey moving forward: What unique creation could I craft to leave my mark among these skilled modders?
              </p>
              <h1>A little about me;</h1>
              <p>There's an indescribable joy in the rhythm of wheels on tarmac, the whispered secrets of ancient cobblestones, 
                  and the hum of languages unknown. Traveling, for me, is an art form—a symphony of sights, sounds, and sensations that awaken the senses and nourish the soul.

                  Each journey is a narrative waiting to unfold, a story woven from chance encounters, serendipitous moments, 
                  and unexpected detours. Whether I'm navigating the winding alleys of a bustling bazaar or gazing in awe at the vast expanse of an untouched landscape, 
                  every step taken is a step closer to understanding the rich tapestry of humanity and the world we inhabit.
              </p>
              <div>
                  <img src="05.jpg" alt="Paris" />
                  <img src="bakery.jpg" alt="Food" />
                  <img src="collectibles.jpg" alt="randos" />
              </div>
          </div>
          <div className="right-column">
              <div className="resume-text">
                  <h1>OMG what's here?</h1>
                  <h2>hm.....</h2>
              </div>
              <img className="resume-photo" src="image.png" alt="Resume" />
          </div>
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
                  <p>This Python script enables users to register books by scanning RFID stickers or cards using a Raspberry Pi with an MFRC522 RFID reader. 
                      It allows users to input book information such as name, author, and genre. The script saves this information in text files named after the scanned RFID tag IDs. 
                      When a tag is rescanned, the script retrieves the corresponding book information from the saved file and performs a Google search based on the book's title and author.
                  The plan is to make a fully dynamic book reading tracking and the tracking is available 24/7 at any time.
                  
                  </p>
              </div>
              
              
              <div className="left-column">
                  
                  <p>More about this project can be found on my GitHub page.</p>

              </div>
          </div>
      </div>
      {/* New section */}
<div className="projects-container">
    <div className="left-half">
        <div className="left-column">
            <h1>Another Project</h1>
            <p>Description of another project goes here.</p>
        </div>
        
        <div className="left-column">
            <p>More about this project can be found on my GitHub page.</p>
        </div>
    </div>
    
    <div className="right-half">
        <img src="photo.jpg" alt="Photo" />
    </div>
</div>
     
      
      
      
      
    </div>
    
    
    
  );
}

export default App;
