import {
  ADD_DATA,
  REMOVE_DATA,
  ACTIVATE_DATA,
  GET_DATA,
  REMOVE_PENDING,
} from "../actions/dataActions";

export const dataReducer = (state = [[]], action) => {
  switch (action.type) {
    case ADD_DATA:
      let temp = [...state];
      if (temp[action.payload.containerID] == undefined) {
        temp[action.payload.containerID] = [];
      }
      for (let i = 0; i < action.payload.photos.length; i++) {
        temp[action.payload.containerID].push(action.payload.photos[i]);
      }
      return temp;
    case REMOVE_DATA:
      let extra = [...state];
      let tempp = [];
      extra[action.payload.containerID].map((photo) => {
        if (photo["id"] !== +action.payload.photoID) {
          tempp.push(photo);
        }
      });
      extra[action.payload.containerID] = tempp;
      return extra;
    case ACTIVATE_DATA:
      const photos = [...state];
      if (photos[action.payload] == undefined) {
        return photos;
      }
      photos[action.payload].map((photo) => {
        photo["active"] = true;
        return photo;
      });
      return photos;
    case GET_DATA:
      return state[action.payload];
    case REMOVE_PENDING:
      let extraa = [...state];
      let temppp = [];
      if (extraa[action.payload] == undefined) {
        return extraa;
      }
      extraa[action.payload].map((photo) => {
        if (photo["active"]) {
          temppp.push(photo);
        }
      });
      extraa[action.payload] = temppp;
      return extraa;
    default:
      return state;
  }
};
