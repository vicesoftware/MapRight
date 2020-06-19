import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { fetchActiveUserRate } from './dashboard.asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveUserRate } from './dashboard.selectors'

const Dashboard = () => {
	const dispatch = useDispatch()
	const activeUserRate = useSelector(selectActiveUserRate)

	useEffect(() => {
		dispatch(fetchActiveUserRate())
	}, [dispatch])
	return (
		<>
			<div className='py-30'>
				<h3 className='font-weight-bold f-28 mb-0 lh-40 gotham'>
					Revenue Dashboard
				</h3>
			</div>
			<Row>
				<DashboardFilters />
				<ReportCard activeUserRate={activeUserRate} />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
