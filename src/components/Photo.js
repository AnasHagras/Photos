import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/actions/dataActions";
function Photo(props) {
  const dispatch = useDispatch();
  const handleEnter = (event) => {
    const conID = event.target.getAttribute("containerid");
    const phoID = event.target.getAttribute("photoid");
    document.querySelector(`.pd-${conID}-${phoID}`).classList.add("d-flex");
  };
  const handleLeave = (event) => {
    const conID = event.target.getAttribute("containerid");
    const phoID = event.target.getAttribute("photoid");
    document.querySelector(`.pd-${conID}-${phoID}`).classList.remove("d-flex");
  };
  const deleteAction = (event) => {
    const conID = event.target.getAttribute("containerid");
    const phoID = event.target.getAttribute("photoid");
    dispatch(remove({ containerID: conID, photoID: phoID }));
  };
  return (
    <div
      onMouseEnter={(e) => handleEnter(e)}
      onMouseLeave={(e) => handleLeave(e)}
      containerid={props["containerid"]}
      photoid={props["photoid"]}
      className={`innerImage pc-${props["containerid"]}-${props["photoid"]}`}
    >
      <img
        src={props["src"]}
        alt=""
        className={`Image pi-${props["containerid"]}-${props["photoid"]}`}
        containerid={props["containerid"]}
        photoid={props["photoid"]}
      />
      <div
        className={`deletePhoto pd-${props["containerid"]}-${props["photoid"]}`}
        containerid={props["containerid"]}
        photoid={props["photoid"]}
        onMouseLeave={(e) => handleLeave(e)}
      >
        <button
          className={`delButton pb-${props["containerid"]}-${props["photoid"]}`}
          containerid={props["containerid"]}
          photoid={props["photoid"]}
          onClick={(e) => deleteAction(e)}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Photo;
