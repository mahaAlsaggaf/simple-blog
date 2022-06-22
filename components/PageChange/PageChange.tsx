import React from "react";

// reactstrap components
import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50">
      <div className="text-center">
        <h1> Loading ..</h1>
      </div>
      </div>
    </div>
  );
}
