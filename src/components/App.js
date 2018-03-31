import React from "react"; 
import Header from "./Header";
import InvoiceItem from "./InvoiceItem"; 

import {formatPrice} from "../helpers"
import InvoiceData from "../InvoiceData";

class App extends React.Component {
	state = {
		invoices: {}
	}

	componentDidMount = () => {
		const invoices = {...this.state.invoices}; 
		this.setState({invoices:InvoiceData})
	}


	render(){
		return (
			<div>
				<Header />
				{Object.keys(this.state.invoices).map( key => 
					<InvoiceItem 
					key={key}
					vendor={this.state.invoices[key].vendor}
					amount={`${ formatPrice(this.state.invoices[key].amount)}`}
					date={this.state.invoices[key].date}
					/>
					)}

			</div>
			)
	}
};

export default App