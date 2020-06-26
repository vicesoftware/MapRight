import React from 'react'
import Image from 'react-bootstrap/Image'
import Icons from '../../assets/icons'

const SortingCustomIcon = (order, row) => {
	return (
		<span className='order-arrow d-flex flex-column'>
			{(order === 'asc' || !order) && (
				<span className='arrow-up'>
					<Image
						src={row.userColumn ? Icons.caretDarkIcon : Icons.caretIcon}
						alt='caret-icon'
						className='opacity-50 upArrow'
						width='10'
					/>
				</span>
			)}
			{(order === 'desc' || !order) && (
				<span className='arrow-down'>
					<Image
						src={row.userColumn ? Icons.caretDarkIcon : Icons.caretIcon}
						alt='caret-icon'
						className='opacity-50'
						width='10'
					/>
				</span>
			)}
		</span>
	)
}

export default SortingCustomIcon
