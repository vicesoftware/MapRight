import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSubscriptions } from './dashboard.asyncActions'
import {
	selectEventType,
	selectSwitchToggle,
	selectSearchFieldValue,
} from './dashboard.selectors'

const Dashboard = () => {
	const dispatch = useDispatch()
	const type = useSelector(selectEventType)
	const switchToggle = useSelector(selectSwitchToggle)
	const searchFieldValue = useSelector(selectSearchFieldValue)

	useEffect(() => {
		dispatch(
			fetchAllSubscriptions({
				beginTime: '2020-06-03',
				endTime: '2020-06-22',
				type: type.eventType,
				switchToggle: switchToggle.switchToggle,
				searchFieldValue: searchFieldValue.searchFieldValue,
			})
		)
	}, [dispatch, type, switchToggle, searchFieldValue])
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
