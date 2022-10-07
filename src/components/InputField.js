import React from "react";
import { getInactive, submit, updatePhotoName } from "./logic";
import { useSelector, useDispatch } from "react-redux";
import { activate, add, removePending } from "../store/actions/dataActions";

function InputField(props) {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleAdding = (event) => {
    event.preventDefault();
    dispatch(activate(event.target.getAttribute("containerid")));
  };
  const handleUpdate = (event) => {
    dispatch(removePending(event.target.getAttribute("containerid")));
    dispatch(
      add({
        containerID: event.target.getAttribute("containerid"),
        photos: getPhotos(
          event.target.files,
          event.target.getAttribute("containerid")
        ),
      })
    );
  };
  //   const getFromFile = (file) => {
  //     let fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     let temp = "FUCK";
  //     fileReader.onload = (event) => {
  //       temp = event.target.result;
  //       console.log(temp);
  //     };
  //     return temp;
  //   };
  const getPhotos = (filesInput) => {
    return [...filesInput].map((file) => {
      return {
        src: URL.createObjectURL(file),
        id: parseInt(Math.random() * 1000000),
        active: false,
      };
    });
  };
  return (
    <div>
      <form action="">
        <label
          htmlFor={`btn-${props["containerid"]}`}
          className="Label"
          containerid={props.containerid}
        >
          Select Images
          <br></br>
          <i className="fa fa-2x fa-camera" aria-hidden="true"></i>
          <input
            className="inputTag"
            type="file"
            multiple="True"
            id={`btn-${props["containerid"]}`}
            containerid={props.containerid}
            onChange={(e) => handleUpdate(e)}
          />
          <span id="imageName">{getInactive(state, props["containerid"])}</span>
          <button
            type="submit"
            value="Add"
            id="Button"
            containerid={props.containerid}
            onClick={(e) => handleAdding(e)}
          >
            Add
          </button>
        </label>
      </form>
    </div>
  );
}

export default InputField;
