import { SET_ACTIVE_DIALOG } from '../actionCreators/dialogs';


const initialState = {
  activeDialogId: 1
};

const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_DIALOG:
      state.activeDialogId = action.payload;
      return state;
    default:
      return state;
  }
};

export default dialogs;