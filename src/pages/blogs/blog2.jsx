import "../../index.css";
import "./blog-styles.css";

function Blog() {
  return (
    <main>
      <h1 style={{ color: "var(--foreground-dark)" }}>GNU Make Utility</h1>
      <h2 className="heading">What is Make?</h2>
      <p className="paragraph">
        Make is a tool provided by GNU that at its very core can run certain
        commands whenever certain conditions are met. These commands are either
        native to the shell (system manipulation/navigation commands in bash
        like `ls`, `cd`, `mkdir`, etc.) or they are compiler instructions
        (building object files, linking them, creating executables, etc.)
        pertaining to any language whose compiler can be run with a shell
        command. The{" "}
        <a
          href="https://archive.org/details/gnumake00rich_j85"
          className="link"
        >
          book
        </a>{" "}
        written by the creators of GNU Make Richard Stallman, Roland McGrath,
        Paul Smith defines Make as &quot;a utility that automatically determines
        which pieces of a large program need to be recompiled, and issues
        commands to recompile them&quot;.
      </p>

      <h2 className="heading">What are Makefiles?</h2>
      <p className="paragraph">
        Since the Make utility implements instructions, there must be a way to
        write those instructions in a structural manner. A Makefile is exactly
        that, a bunch of coherent instructions that Make can follow to update or
        build program files. Once a suitable makefile exists, each time any
        changes to the source files occur, a simple shell command:
        <code>make</code>
        suffices to perform all necessary recompilations.
      </p>
      <p className="paragraph">
        A makefile is a collection of &apos;rules&apos;, these rules need to
        follow a particular syntax. A generic rule looks like this.
        <pre>
          <code>
            {`target ... : prerequisites ...
<T A B> recipe
        ...
        ...
`}
          </code>
        </pre>
        where the &apos;...&apos; symbol signifies that there can be more than
        one target, prerequisite or recipe.
        <h3 className="definition">Target</h3> is usually the name of a file
        that is generated by a program. Examples of targets are executable or
        object files. A target can also be the name of action to carry
        out.(Phony Targets) <h3 className="definition">Prerequisites</h3> are
        files used as input to create the target. Prerequisites are multiple in
        number more often than not.
        <h3 className="definition">Recipe</h3> is an action that{" "}
        <code className="inline-code">make</code> carries out. A recipe may have
        more than one command, either on the same line or on its own line. Note
        that each recipe line MUST HAVE A{" "}
        <code className="inline-code">&lt;TAB&gt;</code> CHARACTER at the
        beginning.
      </p>
      <h2 className="heading">A simple scenario</h2>
      <p className="paragraph">
        We will now see what a barebones makefile can do through a simple
        scenario. Say I have a project i&apos;m working on. It is written in
        C++, has 3 files :
        <pre>
          <code>
            {`//this is foo.hpp
#pragma once

void some_func(int);
`}
          </code>
        </pre>
        <pre>
          <code>
            {`//this is foo.cpp
#include "./foo.hpp"
#include <iostream>

void some_func(int bar) {
  while(bar--)
    std::cout << "something in the way" << std::endl;
}
`}
          </code>
        </pre>
        <pre>
          <code>
            {`//this is main.cpp
#include "./foo.hpp"

int main() {
  some_func(2);
  return 0;
}
`}
          </code>
        </pre>
        where &#34;foo.cpp&#34; along with &#34;foo.hpp&#34; is a user defined
        library to be used in &#34;main.cpp&#34;. In order to get this compiled
        and running, I have to follow two simple procedures.
        <h3 className="definition">1. make object files from .cpp files</h3>
        <code> g++ -c main.cpp foo.cpp </code>
        this will create two object files main.o and foo.o and everytime I make
        changes to either main.cpp or foo.cpp, I will require a new object file
        to reflect the changes corresponding to the file I edited.
        <h3 className="definition">
          2. make the final executable from the object files
        </h3>
        <code> g++ main.o foo.o -o myExecutable </code>
        this will create the final executable called{" "}
        <code className="inline-code">myExecutable</code> in the same folder.
        Which I can then run by{" "}
        <code className="inline-code">./myExecutable</code>.
      </p>
      <h2 className="heading">The Problem :(</h2>
      <p className="paragraph">
        Throughout the development of my project I will make changes to foo.cpp
        and main.cpp many many times! As the project grows larger with more
        files, am I expected to write the compile instructions everytime? If
        only ... there was a way automate this process.
      </p>
      <h2 className="heading">The Solution! :)</h2>
      <p className="paragraph">
        This is exactly why the GNU Make utility exists! Let&apos;s use Make and
        write a simple makefile to do the building for us. Following is a
        barebones makefile to automate the compilation process.
      </p>
      <pre>
        <code>
          {`
myExecutable : main.o foo.o
	g++ main.o foo.o -o myExecutable

main.o : main.cpp
	g++ -c main.cpp

foo.o : foo.cpp
	g++ -c foo.cpp

clean:
	rm myExecutable main.o foo.o

`}
        </code>
      </pre>
      <p>
        The wildcard &apos;*&apos; can be used to further simplify the makefile.
      </p>
      <pre>
        <code>
          {`
myExecutable : *.o
        g++ *.o -o myExecutable

*.o : *.cpp
        g++ -c *.cpp

clean:
        rm myExecutable *.o

`}
        </code>
      </pre>
      <p className="paragraph">
        A makefile works in a bottom up manner when looking for tasks in a kind
        of oxymoronic way. When reading a makefile, the program first reads the
        targets&apos; prerequisites/dependencies starting with the topmost
        target. It then keeps moving down the chain of dependencies to reach the
        most basic target dependency pair. It then starts processing the recipe
        instructions given for the particular target block, and once it has
        reached its target proceeds to a level higher in the buildchain until it
        has reached the topmost target.
        <h3 className="definition">Explanation of the above example</h3>
        In the makefile we wrote, the execution starts with seeing the target
        &apos;myExecutable&apos; and its dependencies &apos;main.o&apos; and
        &apos;foo.o&apos;. Then it looks for the targets &apos;main.o&apos; and
        &apos;foo.o&apos; and checks if their dependencies exist or not. Since
        &apos;main.cpp&apos; and &apos;foo.cpp&apos; exist in the directory, it
        starts the process by running the recipe under this block which then
        creates the object files required for the target
        &apos;myExecutable&apos; to run! Since there is no target which is
        expecting a myExecutable as a dependency, our make process finishes
        here. &apos;Clean&apos; is a build instruction that removes the
        object/exe files for those who like to{" "}
        <code className="inline-code">ls</code>
        to a neat look.
      </p>
      <h2 className="heading">Summing Up</h2>
      <p className="paragraph">
        I wrote this article because I feel that Make is an amazing tool! And
        the skill to write an elegant, to the point makefile, is a great skill
        to have. Whether just developing solo or writing open source software
        for others to collaborate on, Make makes for a great tool to build
        software cross platform(although a GNU initiative, make works on windows
        and mac as well!). I would definitely recommend going over the{" "}
        <a
          href="https://archive.org/details/gnumake00rich_j85"
          className="link"
        >
          book
        </a>{" "}
        written by the original developers of Make. I use some advanced
        makefiles in my projects, head on over to the Projects tab to explore
        more!
      </p>
    </main>
  );
}

export default Blog;
