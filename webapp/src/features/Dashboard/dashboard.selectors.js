import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectGrowthRate = (state) => selectSlice(state).growthRate
