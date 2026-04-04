import { lazy, memo, Suspense } from "react";
import { singleUser } from "../../data";
import "./user.scss";

const Single = lazy(() => import("../../components/single/Single"));

const User = () => {
  // Fetch data and send it to single component(similar to user page)
  return (
    <div>
      <Suspense fallback={null}>
        <Single {...singleUser} />
      </Suspense>
    </div>
  );
};

export default memo(User);
