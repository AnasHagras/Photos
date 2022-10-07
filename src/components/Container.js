import React from "react";
import { useSelector } from "react-redux";
import InputField from "./InputField";
import Photo from "./Photo";
import PhotoContainer from "./PhotoContainer";
import { getActive } from "./logic";

function Container(props) {
  const data = useSelector((state) => state.data);
  return (
    <div className="Container d-flex" id={`c-${props["containerid"]}`}>
      <InputField containerid={props.containerid}></InputField>
      <PhotoContainer containerid={props.containerid}>
        {getActive(data, props.containerid) != undefined ? (
          getActive(data, props.containerid).map((item, index) => {
            return (
              <Photo
                src={item.src}
                key={item.id}
                containerid={props.containerid}
                photoid={item.id}
              ></Photo>
            );
          })
        ) : (
          <>
            <h6 style={{ maxWidth: 100, textAlign: "center" }}>No Photos!</h6>
          </>
        )}
      </PhotoContainer>
    </div>
  );
}

export default Container;
