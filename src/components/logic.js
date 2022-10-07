import { useDispatch, useSelector } from "react-redux";

const submit = (e) => {
  e.preventDefault();
};

const getActive = (data, id) => {
  if (data[id] != undefined) {
    let temp = [...data[id]].filter((e) => {
      return e["active"] == true;
    });
    return temp.length == 0 ? undefined : temp;
  } else {
    return undefined;
  }
};

const getInactive = (data, id) => {
  if (data[id] != undefined) {
    let temp = [...data[id]].filter((e) => {
      return e["active"] == false;
    });
    return temp.length == 0 ? "" : temp.length + " Files";
  } else {
    return "";
  }
};

export { submit, getActive, getInactive };
