import { IMAGE_ACTION_TYPES } from '../../actions/Images/actionTypes';

const initialState = {
  images: []
};
export const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_ACTION_TYPES.GET_ALL_IMAGES:
      return { ...state, files: map(action.payload) };
    default:
      return state;
  }
};
