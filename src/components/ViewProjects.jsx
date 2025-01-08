import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayThreeDigits({ number }) {
  const threeDigitNumber = String(number).padStart(3, "0");
  return <span>{threeDigitNumber}</span>;
}

function ViewProjects() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setProjects(myJson);
      });
  }, []);

  return (
    <>
      {Projects &&
        Projects.map((item) => (
          <div className="projectpreview" key={item.id}>
            <div className="projectcardflex">
              <h2 style={{ flex: 1, color: "var(--color-accent)" }}>
                {item.name}
              </h2>
              {/* <h2 id="projID">{item.id}</h2> */}
              <h2 id="projID">
                <DisplayThreeDigits number={item.id} />
              </h2>
            </div>
            <p style={{ flex: 2 }}>{item.brief}</p>
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
                {item.tags.map((tag, index) => (
                  <span key={index} style={{ marginRight: "10px" }}>
                    {tag}
                  </span>
                ))}
              </p>
            </div>

            <Link to={`/projects/${item.id}`}>
              <button className="fillcolor" style={{ flex: 1 }}>
                go to project
              </button>
            </Link>
          </div>
        ))}
    </>
  );
}

export default ViewProjects;
