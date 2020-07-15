import slice from './userItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectUserItemModal = (state) =>
	selectSlice(state).selectedUserItemModal

export const selectUserInformation = (state) =>
	selectSlice(state).userInformation

export const selectActivityHistory = (state) =>
	selectSlice(state).activityHistory

export const selectedInvoice = (state) => selectSlice(state).invoice

export const selectBillingHistory = (state) => selectSlice(state).billingHistory
