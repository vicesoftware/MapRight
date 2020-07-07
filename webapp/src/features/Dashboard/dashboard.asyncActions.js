import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'
import { createFilterString } from './dashboard.utils'

export const fetchAllSubscriptions = createAsyncThunk(
	'subscriptions',
	async (filters, thunkArgs, { useCaching, noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `subscriptions${fullQs}`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load subscription data. Please try again later.',
			...thunkArgs,
		})
	}
)
