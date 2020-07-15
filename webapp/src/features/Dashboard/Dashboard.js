import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchAllSubscriptions,
	fetchChurnRate,
	fetchGrowthRate,
	fetchActiveUserRate,
	fetchTotalRevenue,
	fetchLifeTimeValue,
	fetchAverageRevenue,
	fetchPlans,
} from './dashboard.asyncActions'
import {
	selectSearchType,
	selectOutdatedSubscriptions,
	selectSearchValue,
	selectChurnRate,
	selectfilter,
	selectPlans,
} from './dashboard.selectors'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import BusyIndicator from '../../widgets/busyIndicator'

const Dashboard = () => {
	const dispatch = useDispatch()
	const searchType = useSelector(selectSearchType)
	const outdatedSubscriptions = useSelector(selectOutdatedSubscriptions)
	const allChurnRate = useSelector(selectChurnRate)
	const searchValue = useSelector(selectSearchValue)
	const filter = useSelector(selectfilter)
	const plans = useSelector(selectPlans)

	const dateFormatter = (date) => moment(date).format('YYYY-MM-DD')

	useEffect(() => {
		dispatch(
			fetchAllSubscriptions({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
				searchType: searchType,
				outdatedSubscriptions: outdatedSubscriptions,
				searchValue: searchValue,
			})
		)
	}, [
		dispatch,
		searchType,
		outdatedSubscriptions,
		searchValue,
		filter.startDate,
		filter.endDate,
	])

	useEffect(() => {
		dispatch(
			fetchChurnRate({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(
			fetchGrowthRate({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(
			fetchActiveUserRate({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(
			fetchTotalRevenue({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(
			fetchLifeTimeValue({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(
			fetchAverageRevenue({
				beginTime: dateFormatter(filter.startDate),
				endTime: dateFormatter(filter.endDate),
			})
		)
		dispatch(fetchPlans())
	}, [dispatch, filter])
	return (
		<>
			<div className='py-30'>
				<h3 className='font-weight-bold f-28 mb-0 lh-40 gotham'>
					Revenue Dashboard
				</h3>
			</div>
			<Row>
				<DashboardFilters plans={plans} />
				<BusyIndicator>
					{!isEmpty(allChurnRate) && <ReportCard />}
				</BusyIndicator>
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
