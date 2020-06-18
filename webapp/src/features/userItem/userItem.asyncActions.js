import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchBillingHistory = createAsyncThunk(
	'api/billingHistory',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/billingHistory?subscriptionId=n0il5aple0be',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load billing history. Please try again later.',
			...thunkArgs,
		})
	}
)
