import React, { useEffect } from 'react'
import ReportCard from './ReportCard'
import { Row } from 'react-bootstrap'
import DashboardFilters from './DashboardFilters'
import { fetchChurnRate } from './dashboard.asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectChurnRate } from './dashboard.selectors'

const Dashboard = () => {
	const dispatch = useDispatch()
	const churnRate = useSelector(selectChurnRate)
	useEffect(() => {
		dispatch(fetchChurnRate())
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
				<ReportCard churnRate={churnRate} />
			</Row>
		</>
	)
}
export default Dashboard
