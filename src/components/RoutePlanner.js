import { Component } from "react";
import RoadMap from "./RoadMap";

class RoutePlanner extends Component {
    state = { 
        openForm: true,
        openRoadmap : true,
        openExport : false,
        ship : {
            name : "Taurus",
            cargo : 17500
        },
        form : {
            from : "Area 18 - ArcCorp",
            to : "Mining Facilities 048 - Wala",
            action : "buy",
            product : "Astatine",
            unit_price : 7.85,
            quantity : 17500,
            all_known : false,
        },
        roadmap : []
    } 

    handleNameChange = (event) => {
        let new_ship = {...this.state.ship}
        new_ship.name = event.target.value

        this.setState({ship : new_ship})
    }

    handleCargoChange = (event) => {
        let new_ship = {...this.state.ship}
        new_ship.cargo = event.target.value
        
        this.setState({ship : new_ship})
    }

    handleFromChange = (event) => {
        let new_form = {...this.state.form}
        new_form.from = event.target.value
        
        this.setState({form : new_form})
    }

    handleToChange = (event) => {
        let new_form = {...this.state.form}
        new_form.to = event.target.value
        
        this.setState({form : new_form})
    }

    handleActionChange = (event) => {
        let new_form = {...this.state.form}
        new_form.action = event.target.value

        if(new_form.action != "sell" && new_form.action != "buy"){
            new_form.unit_price = ""
            new_form.product = ""
            new_form.quantity = ""
        }
        
        this.setState({form : new_form})
    }

    handleUnitPriceChange = (event) => {
        let new_form = {...this.state.form}
        new_form.unit_price = event.target.value
        
        this.setState({form : new_form})
    }

    handleQuantityChange = (event) => {
        let new_form = {...this.state.form}
        new_form.quantity = event.target.value
        
        this.setState({form : new_form})
    }
    
    handleProductChange = (event) => {
        let new_form = {...this.state.form}
        new_form.product = event.target.value
        
        this.setState({form : new_form})
    }

    handleAddRoute = (event) => {
        event.preventDefault();
        
        let form = {...this.state.form}
        let new_roadmap = [...this.state.roadmap]
        new_roadmap.push(form)

        this.setState({roadmap : new_roadmap})
        console.log("Add Road");
    }

    handleDeleteRoute = () => {
        console.log("Remove Road");
    }

    handleCopyRoute = () => {
        console.log("Copy Road");
    }

    handleToggleForm = () => {
        this.setState({openForm : !this.state.openForm})
    }

    handleToggleRoadmap = () => {
        this.setState({openRoadmap : !this.state.openRoadmap})
    }

    handleToggleExport = () => {
        this.setState({openExport : !this.state.openExport})
    }

    render() { 
        return (<div className='flex-1 flex flex-col gap-2'>
            
            <div className='flex justify-between p-2 px-4 bg-gray-600 hover:bg-gray-700 cursor-pointer transition text-xl' onClick={this.handleToggleForm}>
                <span><i className='fas fa-map-marker-alt'></i> Roadmap Form </span>
                {this.state.openForm &&<i className='fas fa-caret-square-down self-center'></i>}
                {!this.state.openForm &&<i className='fas fa-caret-square-up self-center'></i>}
            </div>
            {this.state.openForm && <div className='flex flex-col gap-2 mx-2'>

                <div className='text-sm bg-gray-600 border-2 border-gray-700 text-gray-200 p-1 px-4 rounded-full'>
                    Create your Flight Plans and ensure for you, to your passengers and your cargo, the best experience possible thru the Verse! 
                </div>
                
                <div className='flex gap-2 bg-gray-800 p-4'>
                    <div className='flex-none w-20 self-center'>
                        Ship 
                    </div>
                    <input type="text" className="w-40 bg-gray-900 border border-gray-700 p-2" placeholder="Ship name" value={this.state.ship.name} onChange={this.handleNameChange} />
                    <div className='flex-none w-20 self-center'>
                        Cargo
                    </div>
                    <input type="number" className="w-40 bg-gray-900 border border-gray-700 p-2" placeholder="Ship cargo" value={this.state.ship.cargo} onChange={this.handleCargoChange}/>
                    <div className='flex-none w-20 self-center'>
                        SCU
                    </div>
                </div>
                
                <div className='flex gap-2'>
                
                    <div className="flex-1 zflex flex-col gap-2 bg-gray-800 p-4">
                        <div className='flex gap-2'>
                            <div className='flex-none w-20 self-center'>
                                From
                            </div>
                            <input type="text"  className="w-40 bg-gray-900 border border-gray-700 p-2" placeholder="From" value={this.state.form.from} onChange={this.handleFromChange} />

                            <div className='flex-none w-20 self-center'>
                                To
                            </div>
                            <input type="text"  className="w-40 bg-gray-900 border border-gray-700 p-2" placeholder="To" value={this.state.form.to} onChange={this.handleToChange} />
                            <div className='flex-none w-20 self-center'>
                                Purpose
                            </div>
                            <select className="w-40 bg-gray-900 border border-gray-700 p-2" value={this.state.form.action} onChange={this.handleActionChange}>
                                <option value="transit">Transit</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>

                        {(this.state.form.action === "buy" || this.state.form.action === "sell") && <div className='flex gap-2'>
                            <div className='flex-none w-20 self-center'>
                                Product
                            </div>
                            <select className="w-40 bg-gray-900 border border-gray-700 p-2" value={this.state.form.action} onChange={this.handleActionChange}>
                                <option>Laranite</option>
                                <option>Astatine</option>
                                <option>Booze</option>
                            </select>

                            <div className='flex-none w-20 self-center'>
                                aUEC/unit
                            </div>
                            <input type="number"  className="w-40 bg-gray-900 border border-gray-700 p-2" value={this.state.form.unit_price} onChange={this.handleUnitPriceChange} />
                            <div className='flex-none w-20 self-center'>
                                Quantity
                            </div>
                            <input type="number"  className="w-40 bg-gray-900 border border-gray-700 p-2" value={this.state.form.quantity} onChange={this.handleQuantityChange} />
                        </div>}
                    </div>

                    <div className='self-end'>
                        <button className="p-4 border border-gray-700 bg-gray-800 hover:bg-gray-700 text-blue-300" type="submit" onClick={this.handleAddRoute}>Add to Plan</button>
                    </div>

                </div>

            </div>}
            
            <div className='flex justify-between p-2 px-4 bg-gray-600 hover:bg-gray-700 cursor-pointer transition text-xl' onClick={this.handleToggleRoadmap}>
                <span><i className='fas fa-route'></i> Roadmap</span>
                {this.state.openRoadmap &&<i className='fas fa-caret-square-down self-center'></i>}
                {!this.state.openRoadmap &&<i className='fas fa-caret-square-up self-center'></i>}
            </div>
            {this.state.openRoadmap && <div className=''>
                {this.state.roadmap.length > 0 &&
                    <RoadMap roadmap={this.state.roadmap} handleCopyRoute={this.handleCopyRoute} handleDeleteRoute={this.handleDeleteRoute}/>
                }
                {this.state.roadmap.length <= 0 && <div className="bg-gray-600 mx-2 px-4">
                        No road set.
                </div>}
            </div>}

            <div className='flex justify-between p-2 px-4 bg-gray-600 hover:bg-gray-700 cursor-pointer transition text-xl' onClick={this.handleToggleExport}>
                <span> <i className='fas fa-print'></i> Export <span className="text-xs text-blue-100">(To Do)</span></span>
                {this.state.openExport &&<i className='fas fa-caret-square-down self-center'></i>}
                {!this.state.openExport &&<i className='fas fa-caret-square-up self-center'></i>}
            </div>
        </div>);
    }
}
 
export default RoutePlanner;