import React from "react";
import loading from "../loadingSpinner.gif";

const Loading = () => {
  return (
    <div className="text-center img-fluid">
      <img src={loading} alt="loading spinner" />
    </div>
  );
};

export default Loading;
