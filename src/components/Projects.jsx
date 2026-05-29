import { useState } from "react";
import "./project.css";

function Projects() {

  const [showHelmet, setShowHelmet] = useState(false);
  const [showFarmer, setShowFarmer] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);

  return (

    <div className="projects-container" id="projects">

      <h1 className="projects-title">
        My Projects
      </h1>

      <div className="projects-box">

        {/* Project 1 */}

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
            alt="helmet"
            className="project-image"
          />

          <h2>Smart Helmet for Rider Using IoT</h2>

          <p>
            IoT-based smart helmet system for rider safety.
          </p>

          <button
            className="read-btn"
            onClick={() => setShowHelmet(!showHelmet)}
          >
            {showHelmet ? "Show Less" : "Read More"}
          </button>

          {showHelmet && (

            <div className="project-details">

              <p>• MQ3 sensor detects alcohol consumption.</p>

              <p>• IR sensor helps accident prevention.</p>

              <p>• RF communication between bike and helmet.</p>

              <p>• Prevents bike start without helmet.</p>

              <p>• Improves rider safety using IoT.</p>

            </div>

          )}

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
            alt="farmer"
            className="project-image"
          />

          <h2>Farmer to Consumer Web Application</h2>

          <p>
            Agriculture marketplace connecting farmers and consumers.
          </p>

          <button
            className="read-btn"
            onClick={() => setShowFarmer(!showFarmer)}
          >
            {showFarmer ? "Show Less" : "Read More"}
          </button>

          {showFarmer && (

            <div className="project-details">

              <p>• Built using Java, React.js, and MySQL.</p>

              <p>• Farmers can upload products online.</p>

              <p>• Consumers directly buy from farmers.</p>

              <p>• Eliminates middlemen.</p>

              <p>• Secure login and database integration.</p>

            </div>

          )}

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="ecommerce"
            className="project-image"
          />

          <h2>E-Commerce Website Using React.js</h2>

          <p>
            Modern responsive shopping website using React.
          </p>

          <button
            className="read-btn"
            onClick={() => setShowEcommerce(!showEcommerce)}
          >
            {showEcommerce ? "Show Less" : "Read More"}
          </button>

          {showEcommerce && (

            <div className="project-details">

              <p>• Responsive modern UI design.</p>

              <p>• Product listing and cart system.</p>

              <p>• React reusable components.</p>

              <p>• Smooth navigation experience.</p>

              <p>• Mobile-friendly interface.</p>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Projects;