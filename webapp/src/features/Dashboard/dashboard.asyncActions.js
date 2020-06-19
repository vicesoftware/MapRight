import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchActiveUserRate = createAsyncThunk(
	'api/activeUserRate',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/activeUserRate?beginTime=2020-06-03&endTime=2020-06-22',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load active user rate. Please try again later.',
			...thunkArgs,
		})
	}
)
