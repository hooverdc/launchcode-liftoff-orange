import React from 'react'
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div id="error-page" className="block w-1/2 space-y-6 bg-gray-400 border border-white">
      <h1>Uh-Oh!</h1>
      <p>This is an unexpected error, how embarassing.</p>
      <p>
        <i>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}

export default ErrorPage