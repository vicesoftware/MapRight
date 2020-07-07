import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedUserItemModal: null,
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectUserItemModal },
	reducer,
} = slice
