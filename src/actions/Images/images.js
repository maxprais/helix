import store from '../../store/index';
import { IMAGE_ACTION_TYPES } from './actionTypes';

export const getAllImages = () => {
  const allFiles = cloneDeep(FILES);
  store.dispatch({ type: IMAGE_ACTION_TYPES.GET_ALL_IMAGES, payload: allFiles });
};
