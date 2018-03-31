import React from 'react'; 

const InvoiceListItem = (props) => {
	return (
		<div className="invoice-list-item">
			<h1>{props.vendor}</h1>
			<h1>{props.amount}</h1>
			<h1>{props.date}</h1>

		</div>
		)
};

export default InvoiceListItem; 

		// vendor: "Store Four", 
		// date: "3/22/2018", 
		// amount: 46.89, 
		// terms: 7, 