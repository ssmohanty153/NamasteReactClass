import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  console.log(error);
  return (
    <div>
      <h1>
        {status}:{statusText}
      </h1>
    </div>
  );
};
export default Error;
