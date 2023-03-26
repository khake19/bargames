import { useRouteError } from "react-router-dom";
import ErrorStyle from './Error.module.css'

const Error = ({errorMessage}) => {
  const error = useRouteError();
  return (
    <div className={ErrorStyle.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || errorMessage}</i>
      </p>
    </div>
  );
}

export default Error;
