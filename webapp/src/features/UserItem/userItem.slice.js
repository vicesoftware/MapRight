import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const initialState = {
	selectedUserItemModal: null,
	invoice: {},
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectedUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
	},
	extraReducers: {
		[asyncActions.saveInvoice.fulfilled]: (state, action) => {
			state.invoice = action.payload
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedUserItemModal },
	reducer,
} = slice
