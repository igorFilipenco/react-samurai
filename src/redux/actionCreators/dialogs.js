export const SET_ACTIVE_DIALOG = 'SET_ACTIVE_DIALOG';


export const setActiveDialogActionCreator = (dialogId = 1) => ({
  type: SET_ACTIVE_DIALOG,
  payload: dialogId
});