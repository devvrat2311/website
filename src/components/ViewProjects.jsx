import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <h2 style={{ flex: 1, color: "var(--color-accent)" }}>{item.name}</h2>
            <p style={{ flex: 2 }}>{item.brief}</p>
            <div style={{flex: 1}}>
            <h3 style={{display: "inline", marginRight: "10px", color: "var(--color-accent)"}}>tags</h3>
            <p style={{ display: "inline-block"}}>
              {item.tags.map((tag, index) => (
                <span key={index} style={{ marginRight: "10px" }}>
                  {tag}
                </span>
              ))}
            </p>
            </div>

            <Link to={`/projects/${item.id}`}>
              <button style={{ flex: 1 }}>go to project</button>
            </Link>
          </div>
        ))}
    </>
  );
}

export default ViewProjects;
