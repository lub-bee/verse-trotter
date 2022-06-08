import './style.css';
import {React, Component} from 'react';
import RoutePlanner from './components/RoutePlanner';
import MenuNav from './components/MenuNav';

class App extends Component {
    state = { 
        currentTab : "RoutePlanner",
        homeBase : "arccorp",
    } 

    handleMenuClick = (e, tab) => {
        console.log(`Tab ${tab} selected`)
        this.setState({currentTab: tab})
    }

    render() { 
        console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`)
        return (<div className={"App bg-gray-900 min-h-screen text-blue-300 px-4 font-hurston"}>
        <div className='text-2xl font-arccorp py-6'>
            Verse'Trotter Companion <span className="text-sm text-blue-100">Version {process.env.REACT_APP_VERSION}</span>
        </div>
        <div className='flex gap-4'>
            <aside className='flex-none w-40 text-center flex flex-col gap-2'>
                <MenuNav name="Home" icon="fas fa-home" handleClick={this.handleMenuClick} currentTab={this.state.currentTab}/>
                <MenuNav name="Route Planner" icon="fas fa-route" handleClick={this.handleMenuClick} currentTab={this.state.currentTab}/>
            </aside>

            {this.state.currentTab == "RoutePlanner" && <RoutePlanner/>}
        </div>
    </div>);
    }
}

export default App;
