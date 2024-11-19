import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slideshow.css";

function Slideshowprojects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const slides = [
  //   { id: 1, content: "Slide 1" },
  //   { id: 2, content: "Slide 2" },
  //   { id: 3, content: "Slide 3" },
  //   { id: 4, content: "Slide 4" },
  // ];

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setSlides(myJson);
      });
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? 0 : (currentIndex - 1) % slides.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === slides.length - 1
        ? slides.length - 1
        : (currentIndex + 1) % slides.length,
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
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="projectpreview" key={slide.id}>
              <h2 style={{ flex: 1, color: "var(--color-accent)" }}>
                {slide.name}
              </h2>
              <p style={{ flex: 2 }}>{slide.brief}</p>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    display: "inline",
                    marginRight: "10px",
                    color: "var(--color-accent)",
                  }}
                >
                  tags
                </h3>
                <p style={{ display: "inline-block" }}>
                  {slide.tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: "10px" }}>
                      {tag}
                    </span>
                  ))}
                </p>
              </div>

              <Link to={`/projects/${slide.id}`}>
                <button style={{ flex: 1 }}>go to project</button>
              </Link>
            </div>
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

export default Slideshowprojects;
