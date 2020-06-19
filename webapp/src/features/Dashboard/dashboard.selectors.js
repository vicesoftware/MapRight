import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectActiveUserRate = (state) => selectSlice(state).activeUserRate
