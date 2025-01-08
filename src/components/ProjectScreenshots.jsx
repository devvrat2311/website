import { useState, useEffect } from "react";
import "./Slideshow.css";

function ProjectScreenshots({ project_id }) {
  const [screenshots, setScreenshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const project = data.find((item) => item.id === project_id);
        console.log("found project", project);
        if (project) {
          setScreenshots(project.screenshots);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [project_id]);

  const handlePrevClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? 0 : (currentIndex - 1) % screenshots.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === screenshots.length - 1
        ? screenshots.length - 1
        : (currentIndex + 1) % screenshots.length,
    );
  };

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {screenshots.map((screenshot, index) => (
          <div className="slide" key={index}>
            {/* <img className="screenshots" src={screenshot} /> */}
            {/* <video className="screenshots" src={screenshot} /> */}
            {screenshot.type === "photo" ? (
            <img
              className="screenshots"
              src={screenshot.src}
              />
            ) : (
              <video width="750" height="500" controls loop>
                <source src={screenshot.src} type="video/webm"/>
              </video>
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
}

export default ProjectScreenshots;
