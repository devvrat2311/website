import "./project-styles.css";
import ProjectScreenshots from "../../components/ProjectScreenshots";

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
        <h2>Project Screenshots</h2>
        <ProjectScreenshots project_id={1} />
        <h2>Project Breakdown</h2>
        <h3 className="subheading">[Typing Mechanics]</h3>
        <p className="paragraph">
          At the core of this project is the typing, since this is a typing test.
          The typing mechanics are the result of a pointer being at the end of the
          user&apos;s string and acting essentially like a text cursor. Functions in
          the main file use this pointer to edit and manage the user&apos;s string to
          provide a responsive experience.
        </p>
        <h3 className="subheading">[Timing Mechanics]</h3>
        <p className="paragraph">
          Timing the test, also a core functionality of a typing test was imlemented
          from scratch using the time.h library in C. Wrote the necessary functions(API)
          to use this struct in other files. The library makes use of the system clock by
          sending regulated pings to the system clock via the time.h API. This information
          is then interpolated by my functions and time is presented in a more familiar
          setting of a stopwatch.
        </p>
        <h3 className="subheading">[Phrase Generation]</h3>
        <p className="paragraph">
          Although typing and timing mechanics will get a typing test up and running, the
          phrases shouldn&apos;t become repetitive and monotonous. Since getting better at typing
          (anything for that matter) is only a fruit of practice, therefore the user should not
          get bored in their journey to improve. Currently the phrases library generates phrases
          by choosing words from a dictionary and adding them together to make a sentence. This
          algorithm will be subject to improvement in future updates.
        </p>
        <h3 className="subheading">[Display/Frontend]</h3>
        <p className="paragraph">
          Writing UI for the terminal can be a bit challenging but this is where I had the most
          fun. UI is one of the most important aspects of the program, the frontend is handled by
          the displayMain() function in &#34;main.c&#34; and the protocols defined in &#34;display.c&#34;.
        </p>
        <h3 className="subheading">[Input Handling]</h3>
        <p className="paragraph">
          A typing program should be responsive and fast. The default input stream which consoles/terminal emulators
          use can be a hassle since they require newline character to assign the input to its variable. The functions
          in &#34;input.c&#34; enable continuous input flow to the program.
        </p>
      </div>
    </main>
  );
}

export default Project;
