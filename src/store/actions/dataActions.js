export const ADD_DATA = "ADD_DATA",
  REMOVE_DATA = "REMOVE_DATA",
  ACTIVATE_DATA = "ACTIVATE_DATA",
  GET_DATA = "GET_DATA",
  REMOVE_PENDING = "REMOVE_PENDING";

// obj is >> {containerID , array}
export const add = (obj) => {
  return {
    type: ADD_DATA,
    payload: obj,
  };
};

// id is containerID
export const activate = function (id) {
  return {
    type: ACTIVATE_DATA,
    payload: id,
  };
};

// obj is >> containerID && photoID
export const remove = function (obj) {
  return {
    type: REMOVE_DATA,
    payload: obj,
  };
};

export const get = function (id) {
  return {
    type: GET_DATA,
    payload: id,
  };
};

export const removePending = function (id) {
  return {
    type: REMOVE_PENDING,
    payload: id,
  };
};
