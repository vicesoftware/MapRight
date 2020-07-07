import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { fetchTotalRevenue } from './dashboard.asyncActions'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTotalRevenue())
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
				<ReportCard />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
