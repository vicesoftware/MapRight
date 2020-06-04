import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import './Table.css'

const Table = ({
	columns,
	data = [],
	keyField,
	expandRow = {},
	classes,
	headerWrapperClasses,
	bodyClasses,
}) => {
	return (
		<BootstrapTable
			keyField={keyField}
			data={data}
			columns={columns}
			expandRow={expandRow}
			bordered={false}
			wrapperClasses='table-responsive'
			classes={classes}
			headerWrapperClasses={headerWrapperClasses}
			bodyClasses={bodyClasses}
		/>
	)
}

export default Table
