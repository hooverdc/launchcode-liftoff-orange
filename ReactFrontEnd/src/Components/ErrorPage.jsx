import React from 'react'
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div id="error-page" className="flex justify-center text-center mx-auto max-w-5xl p-20 my-28 rounded-md bg-gray-400 border border-white">
      <div className="space-y-6">
        <h1 className="font-semibold ">Uh-Oh!</h1>
        <p>This is an unexpected error, how embarassing.</p>
        <p>
          <i>
            Error: '{error.statusText || error.message}'
          </i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage