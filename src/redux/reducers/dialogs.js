import { SET_ACTIVE_DIALOG } from '../actionCreators/dialogs';


const initialState = {
  dialogsMockData: [
    {
      id: 1,
      name: 'Harry',
      isActive: true
    },
    {
      id: 2,
      name: 'John',
      isActive: false
    },
    {
      id: 3,
      name: 'Heidi',
      isActive: false
    },
    {
      id: 4,
      name: 'Crissy',
      isActive: false
    },
    {
      id: 5,
      name: 'Bill',
      isActive: false
    }
  ],
  activeDialogId: 1
};

const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_DIALOG: {
      return {
        ...state,
        activeDialogId: action.payload
      };
    }
    default:
      return state;
  }
};

export default dialogs;