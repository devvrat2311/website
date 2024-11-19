import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

function ProjectFetch() {
  const { id } = useParams();
  const CurrentProject = lazy(
    () => import(`../pages/projects/project${id}.jsx`),
  );

  return (
    <>
      <Suspense fallback={<div>Beep Boop... Loading...</div>}>
        <CurrentProject />
      </Suspense>
    </>
  );
}

export default ProjectFetch;
