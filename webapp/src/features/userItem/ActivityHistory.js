import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Icons from '../../assets/icons'
import Table from '../../widgets/Table'

const ActivityHistory = () => {
	const creditIconFormatter = (row) => {
		if (row.includes('Credit')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 126 230'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#FFBD15'
								d='M58.289 214.663C23.539 214.102 0 195.326 0 181.595C0 174.869 5.88501 165.621 12.891 165.621C22.139 165.621 29.705 185.238 58.289 187.48V121.624C33.068 112.656 5.04401 102.568 5.04401 66.697C5.04401 31.387 31.666 17.375 58.289 14.572V6.445C58.289 3.082 61.652 0 66.416 0C70.619 0 74.823 3.082 74.823 6.445V14.012C93.879 14.572 120.782 20.457 120.782 34.189C120.782 39.513 116.859 50.162 108.451 50.162C101.725 50.162 94.44 41.194 74.823 39.793V96.681C99.204 105.649 125.827 117.979 125.827 156.092C125.827 190.561 105.089 209.618 74.823 213.821V223.349C74.823 226.712 70.62 229.794 66.416 229.794C61.652 229.794 58.289 226.712 58.289 223.349V214.663ZM59.971 91.358V40.355C44.277 42.316 33.068 49.322 33.068 63.895C33.068 79.868 45.118 85.753 59.971 91.358ZM73.142 127.789V186.919C88.275 184.117 97.803 175.149 97.803 159.175C97.803 141.52 86.874 133.674 73.142 127.789Z'
							/>
						</svg>
						<span className='bg-warning position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Refunded')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 126 230'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#248EC2'
								d='M58.289 214.663C23.539 214.102 0 195.326 0 181.595C0 174.869 5.88501 165.621 12.891 165.621C22.139 165.621 29.705 185.238 58.289 187.48V121.624C33.068 112.656 5.04401 102.568 5.04401 66.697C5.04401 31.387 31.666 17.375 58.289 14.572V6.445C58.289 3.082 61.652 0 66.416 0C70.619 0 74.823 3.082 74.823 6.445V14.012C93.879 14.572 120.782 20.457 120.782 34.189C120.782 39.513 116.859 50.162 108.451 50.162C101.725 50.162 94.44 41.194 74.823 39.793V96.681C99.204 105.649 125.827 117.979 125.827 156.092C125.827 190.561 105.089 209.618 74.823 213.821V223.349C74.823 226.712 70.62 229.794 66.416 229.794C61.652 229.794 58.289 226.712 58.289 223.349V214.663ZM59.971 91.358V40.355C44.277 42.316 33.068 49.322 33.068 63.895C33.068 79.868 45.118 85.753 59.971 91.358ZM73.142 127.789V186.919C88.275 184.117 97.803 175.149 97.803 159.175C97.803 141.52 86.874 133.674 73.142 127.789Z'
							/>
						</svg>
						<span className='bg-secondary position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Downgraded')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							fill='#EA496A'
							height='12'
							viewBox='0 0 160 330'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M156.124 240.622C151.078 235.599 142.917 235.619 137.894 240.665L92.8906 285.886V12.8906C92.8906 5.77113 87.1194 0 80 0C72.8805 0 67.1093 5.77113 67.1093 12.8906V285.887L22.1056 240.664C17.0834 235.618 8.92169 235.599 3.87566 240.621C-1.17102 245.644 -1.18971 253.805 3.83183 258.851L70.8631 326.208C70.867 326.212 70.8715 326.215 70.8753 326.219C75.8975 331.252 84.0856 331.268 89.1246 326.22C89.1285 326.215 89.133 326.212 89.1368 326.208L156.168 258.852C161.189 253.807 161.172 245.644 156.124 240.622Z'
								fill='#EA496A'
							/>
						</svg>
						<span className='bg-danger position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Paid')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 126 230'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#96D1C1'
								d='M58.289 214.663C23.539 214.102 0 195.326 0 181.595C0 174.869 5.88501 165.621 12.891 165.621C22.139 165.621 29.705 185.238 58.289 187.48V121.624C33.068 112.656 5.04401 102.568 5.04401 66.697C5.04401 31.387 31.666 17.375 58.289 14.572V6.445C58.289 3.082 61.652 0 66.416 0C70.619 0 74.823 3.082 74.823 6.445V14.012C93.879 14.572 120.782 20.457 120.782 34.189C120.782 39.513 116.859 50.162 108.451 50.162C101.725 50.162 94.44 41.194 74.823 39.793V96.681C99.204 105.649 125.827 117.979 125.827 156.092C125.827 190.561 105.089 209.618 74.823 213.821V223.349C74.823 226.712 70.62 229.794 66.416 229.794C61.652 229.794 58.289 226.712 58.289 223.349V214.663ZM59.971 91.358V40.355C44.277 42.316 33.068 49.322 33.068 63.895C33.068 79.868 45.118 85.753 59.971 91.358ZM73.142 127.789V186.919C88.275 184.117 97.803 175.149 97.803 159.175C97.803 141.52 86.874 133.674 73.142 127.789Z'
							/>
						</svg>
						<span className='bg-success position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Churn')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 126 230'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#EA496A'
								d='M58.289 214.663C23.539 214.102 0 195.326 0 181.595C0 174.869 5.88501 165.621 12.891 165.621C22.139 165.621 29.705 185.238 58.289 187.48V121.624C33.068 112.656 5.04401 102.568 5.04401 66.697C5.04401 31.387 31.666 17.375 58.289 14.572V6.445C58.289 3.082 61.652 0 66.416 0C70.619 0 74.823 3.082 74.823 6.445V14.012C93.879 14.572 120.782 20.457 120.782 34.189C120.782 39.513 116.859 50.162 108.451 50.162C101.725 50.162 94.44 41.194 74.823 39.793V96.681C99.204 105.649 125.827 117.979 125.827 156.092C125.827 190.561 105.089 209.618 74.823 213.821V223.349C74.823 226.712 70.62 229.794 66.416 229.794C61.652 229.794 58.289 226.712 58.289 223.349V214.663ZM59.971 91.358V40.355C44.277 42.316 33.068 49.322 33.068 63.895C33.068 79.868 45.118 85.753 59.971 91.358ZM73.142 127.789V186.919C88.275 184.117 97.803 175.149 97.803 159.175C97.803 141.52 86.874 133.674 73.142 127.789Z'
							/>
						</svg>
						<span className='bg-danger position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Upgraded')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 160 330'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#6BB645'
								d='M3.87563 89.3786C8.92166 94.4007 17.0834 94.3814 22.1055 89.3354L67.1093 44.1138L67.1093 317.109C67.1093 324.229 72.8804 330 79.9999 330C87.1194 330 92.8905 324.229 92.8905 317.109L92.8905 44.1131L137.894 89.336C142.916 94.382 151.078 94.4014 156.124 89.3792C161.171 84.3564 161.19 76.1947 156.168 71.1487L89.1368 3.79254C89.1329 3.78803 89.1284 3.78481 89.1245 3.78094C84.1024 -1.2522 75.9142 -1.26831 70.8753 3.7803C70.8714 3.78482 70.8669 3.78803 70.8631 3.7919L3.8318 71.148C-1.1891 76.1934 -1.1717 84.3557 3.87563 89.3786Z'
							/>
						</svg>
						<span className='bg-success position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		} else if (row.includes('Subscription Creation')) {
			return (
				<div className='d-flex align-items-center'>
					<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
						<svg
							height='12'
							viewBox='0 0 126 230'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='#96D1C1'
								d='M58.289 214.663C23.539 214.102 0 195.326 0 181.595C0 174.869 5.88501 165.621 12.891 165.621C22.139 165.621 29.705 185.238 58.289 187.48V121.624C33.068 112.656 5.04401 102.568 5.04401 66.697C5.04401 31.387 31.666 17.375 58.289 14.572V6.445C58.289 3.082 61.652 0 66.416 0C70.619 0 74.823 3.082 74.823 6.445V14.012C93.879 14.572 120.782 20.457 120.782 34.189C120.782 39.513 116.859 50.162 108.451 50.162C101.725 50.162 94.44 41.194 74.823 39.793V96.681C99.204 105.649 125.827 117.979 125.827 156.092C125.827 190.561 105.089 209.618 74.823 213.821V223.349C74.823 226.712 70.62 229.794 66.416 229.794C61.652 229.794 58.289 226.712 58.289 223.349V214.663ZM59.971 91.358V40.355C44.277 42.316 33.068 49.322 33.068 63.895C33.068 79.868 45.118 85.753 59.971 91.358ZM73.142 127.789V186.919C88.275 184.117 97.803 175.149 97.803 159.175C97.803 141.52 86.874 133.674 73.142 127.789Z'
							/>
						</svg>
						<span className='bg-success position-absolute h-100 w-100'></span>
					</div>
					{row}
				</div>
			)
		}
	}
	const activityHistoryColumn = [
		{
			dataField: 'credit',
			text: '',
			formatter: creditIconFormatter,
		},
		{
			dataField: 'eventDate',
			text: 'Event Date',
		},
	]
	const mockActivityHistory = [
		{
			id: 1,
			credit: '$100 Credit',
			eventDate: 'May 24, 2020',
		},
		{
			id: 2,
			credit: 'Refunded $70 from Invoice #123456789',
			eventDate: 'May 24, 2020',
		},
		{
			id: 3,
			credit: 'Downgraded Account to Flex Plan',
			eventDate: 'May 24, 2020',
		},
		{
			id: 4,
			credit: 'Paid $70',
			eventDate: 'May 24, 2020',
		},
		{
			id: 5,
			credit: 'Involuntary Churn',
			eventDate: 'May 24, 2020',
		},
		{
			id: 6,
			credit: 'Upgraded Account to Unlimited Plan',
			eventDate: 'May 24, 2020',
		},
		{
			id: 7,
			credit: 'Subscription Creation',
			eventDate: 'May 24, 2020',
		},
	]
	return (
		<>
			<Row className='mb-20'>
				<Col md={6} xl={6}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-md-0'>
						Activity History
					</h4>
				</Col>
				<Col md={6} lg={4} xl={3} className='ml-auto'>
					<Button
						variant='outline-primary'
						className='d-flex align-items-center justify-content-between w-100'
					>
						Filter by Event Type
						<Image
							src={Icons.arrowDownDarkIcon}
							alt='arrow-down-dark'
							width='20'
						/>
					</Button>
				</Col>
			</Row>
			<Table
				keyField='id'
				data={mockActivityHistory}
				columns={activityHistoryColumn}
				classes='bg-white'
				headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
				bodyClasses='f-14 font-weight-bold'
			/>
		</>
	)
}

export default ActivityHistory
