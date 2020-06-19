import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectLifeTimeValue = (state) => selectSlice(state).lifeTimeValue
