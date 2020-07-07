import slice from './userItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectUserItemModal = (state) =>
	selectSlice(state).selectedUserItemModal
