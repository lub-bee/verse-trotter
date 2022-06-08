import { Component } from "react";
import PlanStep from "./PlanStep";

class RoadMap extends Component {
    state = {  } 
    render() { 
        const step_list = this.props.roadmap.map( (item, key) => {
            return <PlanStep key={key} id={key} from={item.from} to={item.to} purpose={item.action} product={item.product} quantity={item.quantity} unitPrice={item.unit_price} handleCopy={this.props.handleCopyRoute} handleDelete={this.props.handleDeleteRoute}/>
        })
        return (<div className="px-4 flex flex-col gap-1">
            <div className="bg-gray-600 font-bold grid grid-cols-10">
                <div className='text-center'>
                    ID
                </div>
                <div className='col-span-2'>
                    From
                </div>
                <div className='col-span-2'>
                    To
                </div>
                <div className=''>
                    Purpose
                </div>
                <div className=''>
                    Product
                </div>
                <div className=''>
                    Quantity
                </div>
                <div className=''>
                    Unit price
                </div>
            </div>
            {step_list}
        </div>);
    }
}
 
export default RoadMap;