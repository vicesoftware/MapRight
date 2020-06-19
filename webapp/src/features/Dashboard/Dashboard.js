import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { fetchGrowthRate } from './dashboard.asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectGrowthRate } from './dashboard.selectors'

const Dashboard = () => {
	const growthRate = useSelector(selectGrowthRate)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGrowthRate())
	})
	return (
		<>
			<div className='py-30'>
				<h3 className='font-weight-bold f-28 mb-0 lh-40 gotham'>
					Revenue Dashboard
				</h3>
			</div>
			<Row>
				<DashboardFilters />
				<ReportCard growthRate={growthRate} />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
