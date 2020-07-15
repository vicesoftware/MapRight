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

export const fetchChurnRate = createAsyncThunk(
	'api/users/chrunRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `users/churn-rate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load subscription plans. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchGrowthRate = createAsyncThunk(
	'api/growthRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `revenue/growth-rate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load growth rate. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchActiveUserRate = createAsyncThunk(
	'api/users/activeRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `users/active-user-rate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load active user rate. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchTotalRevenue = createAsyncThunk(
	'api/totalRevenue',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `revenue/totalMRR${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load total revenue. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchLifeTimeValue = createAsyncThunk(
	'api/lifeTimeValue',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `revenue/life-time-value${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load life time value. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchAverageRevenue = createAsyncThunk(
	'api/averageRevenue',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `revenue/average-revenue-per-user${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load average revenue value. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchPlans = createAsyncThunk(
	'api/plans',
	async ({ noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'plans',
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load plans. Please try again later.',
			...thunkArgs,
		})
	}
)
