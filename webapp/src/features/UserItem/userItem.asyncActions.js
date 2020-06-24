import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchActivityHistory = createAsyncThunk(
	'activityHistory',
	async (accountId, thunkArgs, { noBusySpinner } = {}) =>
		await doAsync({
			url: `api/accounts/${accountId}/history`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load user activity history data. Please try again later.',
			...thunkArgs,
		})
)
