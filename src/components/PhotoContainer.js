import React from "react";

function PhotoContainer(props) {
  return (
    <div className="photoContainer" id={props.containerID}>
      {props.children}
    </div>
  );
}

export default PhotoContainer;
