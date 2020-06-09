import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchChurnRate = createAsyncThunk(
	'api/users/chrunRate',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'api/users/churnRate?beginTime=2020-06-03&endTime=2020-06-22',
			useCaching,
			noBusySpinner,
			errorMessage:
				'Unable to load subscription plans. Please try again later.',
			...thunkArgs,
		})
)
