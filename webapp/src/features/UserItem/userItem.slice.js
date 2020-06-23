import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedUserItemModal: null,
	eventType: '',
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectedUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
		setSelectedEventType(state, action) {
			state.eventType = action.payload
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedUserItemModal, setSelectedEventType },
	reducer,
} = slice
