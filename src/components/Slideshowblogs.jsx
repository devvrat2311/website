import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slideshow.css";

function Slideshowblogs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
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
          transform: `translateX(-${currentIndex * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="blogpreview">
              <img src={slide.coverImageURL} />
              <h2 style={{ flex: 1 }}>{slide.title}</h2>
              <p style={{ flex: 2 }}>{slide.summary}</p>
              <Link to={`/blogs/${slide.id}`}>
                <button style={{ flex: 1 }}>read more</button>
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

export default Slideshowblogs;
