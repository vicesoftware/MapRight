import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllSubscriptions = createAsyncThunk(
	'subscriptions',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'api/subscriptions?beginTime=2020-06-03&endTime=2020-06-22',
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load subscription data. Please try again later.',
			...thunkArgs,
		})
)
