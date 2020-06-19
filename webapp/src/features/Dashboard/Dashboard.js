import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { fetchLifeTimeValue } from './dashboard.asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectLifeTimeValue } from './dashboard.selectors'

const Dashboard = () => {
	const lifeTimeValue = useSelector(selectLifeTimeValue)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchLifeTimeValue())
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
				<ReportCard lifeTimeValue={lifeTimeValue} />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
