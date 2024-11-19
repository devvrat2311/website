import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const BlogComponent = lazy(() => import(`../pages/blogs/blog${id}.jsx`));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogComponent />
      </Suspense>
    </>
  );
}

export default BlogDetail;
