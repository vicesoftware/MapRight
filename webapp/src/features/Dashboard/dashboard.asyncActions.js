import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'
import { createFilterString } from './dashboard.utils'

export const fetchAllSubscriptions = createAsyncThunk(
	'subscriptions',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/subscriptions${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load subscription data. Please try again later.',
			...thunkArgs,
		})
	}
)
