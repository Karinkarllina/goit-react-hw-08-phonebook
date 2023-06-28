import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';




export const filter = createAction('contacts/filter')
export const filterReduser = createReducer('', {
  [filter]: (_, action) => action.payload.toLowerCase(),
})
