function About() {
  const headingStyle = { color: "var(--color-secondary)", marginBottom: 0 };
  const subHeadingStyle = {
    color: "var(--color-text)",
    margin: 0,
    marginLeft: "30px",
  };
  const linkStyle = { fontSize: "1.3rem", color: "var(--color-secondary)" };
  const infoStyle = {
    lineHeight: "1.5rem",
    border: "2px solid var(--color-muted)",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "30px",
  };
  return (
    <main>
      <div>
        <h1 style={headingStyle}>Debabrata Adhikari</h1>
        <h3 style={{ margin: 0 }}>Learning and Implementing</h3>
        <h2 style={{ margin: 0 }}>Developer</h2>
      </div>
      <div>
        <h2 style={headingStyle}>Introduction</h2>
        <p style={infoStyle}>
          Hello World! I am Debabrata and I am a passionate enthusiast of
          Computer Science and Mathematics. And my love for these two areas of
          academics translates proportionately (if not more than) to my love for
          coding/programming. The essence of coding (in my opinion) is to build
          things, tinker around with them until they break, try fix it and then
          repeat. This is why I love learning because that way I can understand
          more and break more!
        </p>
        <h2 style={headingStyle}>What is this website meant for?</h2>
        <p style={infoStyle}>
          This website started off as an attempt to get better at web
          development. Front-end development appeals to me because of the
          creative nature of it. Backend serving and logic, especially when it
          is simple and elegant, is one heck of a skill to have. JavaScript
          frameworks like React and NextJs are good examples of Routing
          implementation which is akin to backend development in some ways. I`m
          sure that other frameworks like angular, vue, svelte have them too but
          it`s just that I haven`t tried them out, YET. I also post blogs here
          on topics that interest me. These include tutorials, reviews and my
          thoughts/takes on various things. This website also works as my
          developer portfolio, keeps track of what I have built, am building and
          what I intend to build in the future.
        </p>
        <h2 style={headingStyle}>Preferred Languages</h2>
        <p style={infoStyle}>
          As a software engineer, my workspace consists of a computer,
          programming languages, and the operating systems written in them—these
          are the tools I use to &quot;engineer&quot; and build beautiful
          software. In my view, programming languages are simply tools, just
          like the various instruments mechanical engineers use to build and
          test automobiles. Similarly, software engineers rely on a wide range
          of tools to create and refine applications. My preferred languages
          include C++ (with STL and SFML), C, JavaScript (vanilla, React, Node,
          Express), HTML (plain and JSX), and CSS. My goal is to achieve mastery
          in these languages and frameworks at a high level before exploring
          other related technologies. Below are my current thoughts on these
          tools.
        </p>
        <h2 style={subHeadingStyle}>C++</h2>
        <p style={infoStyle}>
          C++ is the language I feel most comfortable with when it comes to
          performance-critical tasks. Introduced to it during my high school
          years, C++ was the first language I seriously dove into as I began to
          learn coding. Its speed and control over system resources make it
          ideal for writing game engines, particularly when precise physics
          simulations and high efficiency are necessary. The vast number of game
          engines built with C++, such as Unreal Engine, is a testament to the
          language’s capability in this field. C++’s low-level
          control—especially its ability to directly manage memory via
          pointers—makes it a prime choice for systems-level design and embedded
          programming. While this power comes with complexity, carefully written
          C++ code can be incredibly robust, making it suitable for long-running
          services like servers or resource-constrained environments such as IoT
          devices. Lately, as Rust’s popularity rises due to its memory safety
          features, C++ is also seeing changes in terms of improving safety.{" "}
          <a style={linkStyle} href="https://safecpp.org/draft.html">
            SafeC++
          </a>{" "}
          , a proposal to enhance C++ with memory safety guarantees similar to
          Rust, aims to provide safer handling of pointers and memory. As
          described by the developers, &quot;The goal of this proposal is to
          advance a superset of C++ with a rigorously safe subset. Begin a new
          project, or take an existing one, and start writing safe code in C++.
          Code in the safe context exhibits the same strong safety guarantees as
          code written in Rust.&quot; Looking ahead, I’m keen on exploring Rust
          as well. With its promise of memory safety and concurrency features,
          it presents an exciting opportunity to learn a language designed to
          address many of the same challenges C++ excels at but with modern
          safety considerations.
        </p>
        <h2 style={subHeadingStyle}>JavaScript</h2>
        <p style={infoStyle}>
          JavaScript is a versatile language that I frequently use for web
          development, excelling in both frontend and backend contexts. When it
          comes to frontend development, Vanilla JavaScript, paired with HTML
          and CSS, is a great option for building dynamic and responsive
          websites, especially for small-scale projects. For larger, more
          complex applications, modern JavaScript frameworks like React,
          Angular, and Svelte offer polished, structured approaches with
          built-in tools to create and maintain consistent UI/UX at scale. On
          the backend, Node.js—a JavaScript runtime—enables developers to use
          JavaScript for server-side development. With Node, you can handle
          backend logic efficiently, and one of its major advantages is the Node
          Package Manager (NPM). NPM provides access to a vast ecosystem of
          packages maintained by developers worldwide, making it easy to
          install, update, and manage dependencies in your projects. Express.js
          is another useful framework built on Node.js, designed to simplify
          processing and responding to HTTP requests. I often use it to create
          lightweight and flexible servers for web applications. JavaScript’s
          inherent asynchronous nature, through features like callback
          functions, promises, and async/await, can seem unfamiliar at first.
          However, these features allow for non-blocking execution, improving
          performance by enabling JavaScript to handle tasks like API requests
          or I/O operations without freezing the main thread. This helps
          maintain smooth data flow and better utilization of the browser&apos;s
          engine during execution.
        </p>
        <h2 style={subHeadingStyle}>HTML+CSS</h2>
        <p style={infoStyle}>
          HTML and CSS form the rock-solid foundation of web development, where
          HTML structures the webpage into a tree of components, and CSS styles
          these components to achieve virtually any desired look. The
          flexibility of CSS is especially appealing, as it allows developers to
          experiment with endless styling possibilities and effects. Paired with
          Vanilla JavaScript, this trio enables the creation of dynamic,
          fully-featured websites. The vast documentation and active community
          support (through platforms like StackOverflow and Reddit) make it easy
          to find solutions and bring ideas to life. Even without relying on a
          large language model, developers can often implement their vision with
          the wealth of information available online. While HTML and CSS focus
          more on paradigms and structure, JavaScript adds logic and
          interactivity, making this combination a fundamental toolkit for web
          developers. LLMs can assist with HTML and CSS generation, but the
          developer&apos;s intuition and decision-making remain essential.
        </p>
      </div>
    </main>
  );
}
export default About;
