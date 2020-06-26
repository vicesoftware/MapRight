import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectChurnRate = (state) => selectSlice(state).churnRate

export const selectLifeTimeValue = (state) => selectSlice(state).lifeTimeValue

export const selectTotalRevenue = (state) => selectSlice(state).totalRevenue

export const selectActiveUserRate = (state) => selectSlice(state).activeUserRate

export const selectGrowthRate = (state) => selectSlice(state).growthRate

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions
