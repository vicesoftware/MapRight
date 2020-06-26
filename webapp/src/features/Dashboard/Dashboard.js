import React, { useEffect } from 'react'
import SubscriptionTable from './SubscriptionTable'
import ReportCard from './ReportCard'
import DashboardFilters from './DashboardFilters'
import Row from 'react-bootstrap/Row'
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchChurnRate,
	fetchLifeTimeValue,
	fetchTotalRevenue,
	fetchActiveUserRate,
	fetchGrowthRate,
} from './dashboard.asyncActions'
import { selectChurnRate } from './dashboard.selectors'
import isEmpty from 'lodash/isEmpty'

const Dashboard = () => {
	const dispatch = useDispatch()
	const allChurnRate = useSelector(selectChurnRate)
	useEffect(() => {
		dispatch(fetchChurnRate({ beginTime: '2020-06-03', endTime: '2020-06-22' }))
		dispatch(
			fetchLifeTimeValue({ beginTime: '2020-06-03', endTime: '2020-06-22' })
		)
		dispatch(
			fetchTotalRevenue({ beginTime: '2020-06-16', endTime: '2020-07-16' })
		)
		dispatch(
			fetchActiveUserRate({ beginTime: '2020-06-03', endTime: '2020-06-22' })
		)
		dispatch(
			fetchGrowthRate({ beginTime: '2020-06-12', endTime: '2020-06-20' })
		)
		dispatch(
			fetchAllSubscriptions({
				beginTime: '2020-06-03',
				endTime: '2020-06-22',
			})
		)
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
				{!isEmpty(allChurnRate) && <ReportCard />}
			</Row>
			<SubscriptionTable />
		</>
	)
}

export default Dashboard
