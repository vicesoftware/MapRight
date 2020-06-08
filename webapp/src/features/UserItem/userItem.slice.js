import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedUserItemModal: null,
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectedUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedUserItemModal },
	reducer,
} = slice
