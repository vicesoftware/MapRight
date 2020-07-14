import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { fetchPlans, fetchStartDate } from './dashboard.asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectfilter,
	selectPlans,
	selectFilterStartDate,
} from './dashboard.selectors'

const Dashboard = () => {
	const dispatch = useDispatch()
	const filter = useSelector(selectfilter)
	const plans = useSelector(selectPlans)
	const filterStartDate = useSelector(selectFilterStartDate)

	useEffect(() => {
		dispatch(fetchPlans())
		dispatch(fetchStartDate())
	}, [dispatch, filter])
	return (
		<>
			<div className='py-30'>
				<h3 className='font-weight-bold f-28 mb-0 lh-40 gotham'>
					Revenue Dashboard
				</h3>
			</div>
			<Row>
				<DashboardFilters plans={plans} filterStartDate={filterStartDate} />
				<ReportCard />
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
