import { configureStore } from '@reduxjs/toolkit'

import DMReducer from './dm-slice'
import friendListReducer from './friend-list-slice'
import modalReducer from './modal-slice'
import panelReducer from './panel-slice'
import popupReducer from './popup-slice'
import userReducer from './user-slice'

export default configureStore({
  reducer: {
    dm: DMReducer,
    friendList: friendListReducer,
    modal: modalReducer,
    panel: panelReducer,
    popup: popupReducer,
    user: userReducer,
  },
})
