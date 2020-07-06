import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSubscriptions } from './dashboard.asyncActions'
import {
	selectSearchType,
	selectOutdatedSubscriptions,
	selectSearchValue,
} from './dashboard.selectors'

const Dashboard = () => {
	const dispatch = useDispatch()
	const searchType = useSelector(selectSearchType)
	const outdatedSubscriptions = useSelector(selectOutdatedSubscriptions)
	const searchValue = useSelector(selectSearchValue)

	useEffect(() => {
		dispatch(
			fetchAllSubscriptions({
				beginTime: '2020-06-03',
				endTime: '2020-06-22',
				searchType: searchType,
				outdatedSubscriptions: outdatedSubscriptions,
				searchValue: searchValue,
			})
		)
	}, [dispatch, searchType, outdatedSubscriptions, searchValue])
	return (
		<>
			<div className='py-30'>
				<h3 className='font-weight-bold f-28 mb-0 lh-40 gotham'>
					Revenue Dashboard
				</h3>
			</div>
			<Row>
				<DashboardFilters />
				<ReportCard />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
