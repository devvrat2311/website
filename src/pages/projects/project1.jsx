import "./project-styles.css";
// import ProjectScreenshots from "../../components/ProjectScreenshots";

function Project() {
  return (
    <main>
      <div className="projectmain">
        <h2 className="heading">001</h2>
        <h2 className="heading">GorillaType</h2>
        <p className="paragraph">
          GorillaType is a typing test that can be run on terminal emulators. It
          is extremely lightweight as it does not use any predefined libraries
          and implements the frontend in the standard output stream displayed on
          any terminal of choice. This project was inspired by the online typing
          test <a href="https://monkeytype.com">MonkeyType</a>. Though not as
          visually appealing as MonkeyType, GorillaType aims to provide good
          analytics to the end user so that they can focus on improving their
          typing skills in a simple and minimalistic environment.
        </p>
        <h3>Project Screenshots</h3>
        {/* <ProjectScreenshots project_id={1} /> */}
        <h3>Experience</h3>
        <p className="paragraph">
          Working on the typing mechanics was where I had the most fun. Aim was
          to make working with standard input/output operations in a terminal
          feel like working in a text editor. Drawing the application as a 2d
          array was another challenge, having different screens for different
          states the program was in; even more so.
        </p>
        <h3>Current State (Ongoing)</h3>
      </div>
    </main>
  );
}

export default Project;
