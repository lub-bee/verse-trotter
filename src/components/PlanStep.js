import { Component } from "react";

class PlanStep extends Component {
    state = {  } 
    render() { 

        let color = "";
        const doBuy = this.props.purpose == "buy";
        const doSell = this.props.purpose == "sell";
        if(doBuy) color = "text-red-600"
        if(doSell) color = "text-green-700"
        const buyOrSell = (doBuy || doSell);

        const tradeDone = (this.props.quantity == "" || this.props.unitPrice == "")

        return (<div className="grid grid-cols-10 border border-gray-700 hover:bg-gray-800 ucfirst">
            <div className='text-center self-center text-blue-100'>
                #{this.props.id+1}
            </div>
            <div className='col-span-2 self-center'>
                {this.props.from}
            </div>
            <div className='col-span-2 self-center'>
                {this.props.to}
            </div>
            <div className={'self-center ' + color}>
                {this.props.purpose == "transit" && <i className='fas fa-exchange-alt'></i>}
                {doSell && <span><i className='fas fa-caret-right'></i> <i className='fas fa-coins'></i></span>}
                {doBuy && <span><i className='fas fa-coins'></i> <i className='fas fa-caret-right'></i></span>}
            </div>
            <div className={'self-center ' + color}>
                {buyOrSell && this.props.product}
            </div>

            {tradeDone && <div className={'self-center ' + color}>
                {doBuy && <span>+</span>}{doSell && <span>-</span>}{buyOrSell && this.props.quantity}
            </div>}
            {!tradeDone && <div className='self-center col-span-2'>
                Confirm trade :
            </div>}


            {tradeDone && <div className={'self-center ' + color}>
                {buyOrSell && this.props.unitPrice}
            </div>}
            
            <div className='justify-end self-center px-2 flex gap-2'>
                <i className='fas fa-copy' onClick={() => this.props.handleCopy(this.props.id)}></i>
                <i className='fas fa-trash-alt' onClick={() => this.props.handleDelete(this.props.id)}></i>
            </div>
        </div>);
    }
}
 
export default PlanStep;