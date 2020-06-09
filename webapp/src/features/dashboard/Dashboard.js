import React from 'react'
import ReportCard from './ReportCard'
import { Row } from 'react-bootstrap'
import DashboardFilters from './DashboardFilters'

const Dashboard = () => {
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
		</>
	)
}
export default Dashboard
