import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'
import { createFilterString } from './dashboard.utils'

export const fetchChurnRate = createAsyncThunk(
	'api/users/chrunRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/users/churnRate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load subscription plans. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchLifeTimeValue = createAsyncThunk(
	'api/lifeTimeValue',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/lifeTimeValue?beginTime=2020-07-03&endTime=2020-07-10',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load life time value. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchTotalRevenue = createAsyncThunk(
	'api/totalRevenue',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/revenue?beginTime=2020-06-16&endTime=2020-07-16',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load total revenue. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchActiveUserRate = createAsyncThunk(
	'api/activeUserRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/users/activeRate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load active user rate. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchGrowthRate = createAsyncThunk(
	'api/growthRate',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/growthRate?beginTime=2020-06-12&endTime=2020-06-20',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load growth rate. Please try again later.',
			...thunkArgs,
		})
	}
)

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
