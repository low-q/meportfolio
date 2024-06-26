// App.js
import './App.css';
import { scrollToNextSection, scrollToNextSection1 } from './scrollUtils'; // Import the function



function App() {

    return (
        <div>
            {/* Main Section. */}
            <section className="main-content">
                {/* Links to LinkedIn and Resume.  */}
                <header>

                    <a href="https://www.linkedin.com/in/ruwais/" class="fa fa-linkedin"></a>
                    <a href="AlotaibiFahadResume-nc.pdf" download class="fa fa-file-pdf-o"></a>
                    <a href="https://github.com/low-q"class="fa fa-github"></a>

                </header>


                <h1 className="left-text">Fahad <br />Alotaibi</h1>
                {/* Top Three Photos. */}
                <div className="photo-container">

                    <img src="grad.jpg" alt="Photo" />
                    <img src="owilly.jpg" alt="Photo" />
                    <img src="vball.jpg" alt="Photo" />

                </div>
                {/* Button for navigation. */}
                <button className="down-arrow-button" onClick={scrollToNextSection}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </section>


            <aside className="right-content">
                <h1 className="right-text">Cyber <br />Security</h1>
            </aside>
            {/* White space for content. */}
            <div className="white-space"></div>

            <section>
            {/* About me Section. */}
            <div className="about-me" id="scroll-target">
                <h1>Who am I?</h1>
                {/* Button for navigation. */}
            <button className="down-arrow-button" onClick={scrollToNextSection1}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                
            </div>
            


            <div className="about-us">
                {/* First Paragraph. */}
                <h1>This is where my story begins:</h1>
                <p>It all started when I decided to take a look at how Minecraft mods work and it got me thinking, what can I do to create something like those people?  <br />
                    I began to learn more about modding and how to use code to break and edit and it lit a fire within me.
                    I found that there is endless potential for innovation when it comes to the world of computer science. <br />
                    It wasn't long before I started taking a deeper dive and reading projects online to gain as much knowledge as I could.
 
                </p>

            </div>

            <div className="about-us">
                {/* Second Paragraph. */}
                <h1>A little about me:</h1>
                <p>Ever since I was young, I have had the urge to explore and learn about different things. I have always loved to learn everything I could about any topic and try to cover all the fundamentals.
                    <br /> Traveling is something that I love to do. I enjoy exploring different cultures and trying their cultural dishes.
                    <br />When I travel, I like to take as many photos as I can so I can keep the memories with me.
                     However, my favorite part is fully immersing myself in the place I am staying with no the technology so I can live presently in the experience.
                </p>
            </div>
            {/* Middle Three Photos. */}
            <div className="photo-container">

                <img src="05.jpg" alt="Photo" />
                <img src="bakery.jpg" alt="Photo" />
                <img src="collectibles.jpg" alt="Photo" />

            </div>
            </section>
            {/* White space for content. */}
            <div className="white-space1"></div>
            <section>
            {/* Projects Section. */} 
            <div className="about-me" id="scroll-target1">

                <h1>Projects</h1>
    

                

                {/* Button for navigation. */}
                {/* <button className="down-arrow-button">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button> */}

            </div>

            {/* White space for content. */}
            <div className="white-space1"></div>

            <div className="projects-container">

                <div className="left-half">
                    {/* Pi 4 + RFID Photo. */}
                    <img src="pi.jpg" alt="Photo" />
                </div>
                {/* First Project.  */}
                <div className="right-half">
                    <div className="left-column">

                        <h1>RFID-BookLibrary v1.0</h1>
                        <p>It allows users to input book information such as name, author, and genre. The script saves this information in text files named after the scanned RFID tag IDs.
                            When a tag is rescanned, the script retrieves the corresponding book information from the saved file and performs a Google search based on the book's title and author.</p>
                        <p><strong>More</strong> about this project can be found on my <a href=" https://github.com/low-q/RFID-BookLibrary"> GitHub page.</a></p>

                    </div>
                </div>
            </div>

            {/* Second Project.  */}
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
                    {/* Flipper + WiFi Board Photo. */}
                    <img src="flipper.jpg" alt="Photo" />
                </div>
            </div>
            
            <div className="projects-container">
                <div className="left-half">
                    {/* AWS Diagram Photo.  */}
                    <img src="aws.png" alt="Photo" />
                </div>
                {/* Third Project.  */}
                <div className="right-half">
                    <div className="left-column">

                        <h1>Building a 3-tier web application architecture with AWS</h1>
                        <p>Implemented a robust AWS 3-tier architecture for Brainiac's web app, ensuring scalability, availability, and security. This included: <br />

                            <strong>Web Tier:</strong> Deployment of fault-tolerant web servers with Auto Scaling Groups and an Application Load Balancer. <br />

                            <strong>Application Tire:</strong> Establishment of secure backend servers accessed through a Bastion host for seamless communication with the Web Tier. <br />

                            <strong>Database Tier:</strong> Utilization of Amazon RDS with MySQL for secure data management and high availability. <br />

                        </p>
                        {/* <p><strong>More</strong> about this project can be found on my <a href=" https://github.com/low-q/RFID-BookLibrary"> GitHub page.</a></p> */}
                    </div>
                </div>
            </div>
            </section>


            <div className="about-me" id="scroll-target1">

                <h2>More Projects coming soon...</h2>

            </div>
        </div>
    );
}

export default App;
