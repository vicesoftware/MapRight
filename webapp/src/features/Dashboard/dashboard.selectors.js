import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions

export const selectSearchType = (state) => selectSlice(state).searchType

export const selectOutdatedSubscriptions = (state) =>
	selectSlice(state).outdatedSubscriptions

export const selectSearchValue = (state) => selectSlice(state).searchValue

export const selectChurnRate = (state) => selectSlice(state).churnRate

export const selectGrowthRate = (state) => selectSlice(state).growthRate

export const selectActiveUserRate = (state) => selectSlice(state).activeUserRate

export const selectTotalRevenue = (state) => selectSlice(state).totalRevenue

export const selectLifeTimeValue = (state) => selectSlice(state).lifeTimeValue

export const selectAverageRevenue = (state) => selectSlice(state).averageRevenue

export const selectfilter = (state) => selectSlice(state).filter

export const selectPlans = (state) => selectSlice(state).plans
