import slice from './userItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectedUserItemModal = (state) =>
	selectSlice(state).selectedUserItemModal

export const selectUserInformation = (state) =>
	selectSlice(state).userInformation

export const selectBillingHistory = (state) => selectSlice(state).billingHistory

export const selectedActivityHistory = (state) =>
	selectSlice(state).activityHistory
