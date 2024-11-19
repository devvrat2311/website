import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewBlogs() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setBlogs(myJson);
      });
  }, []);

  return (
    <>
      {Blogs &&
        Blogs.map((item) => (
          <div className="blogpreview" key={item.id}>
            <img src={item.coverImageURL} />
            <h2 style={{ flex: 1 }}>{item.title}</h2>
            <p style={{ flex: 2 }}>{item.summary}</p>
            <Link to={`/blogs/${item.id}`}>
              <button style={{ flex: 1 }}>read more</button>
            </Link>
          </div>
        ))}
    </>
  );
}

export default ViewBlogs;
