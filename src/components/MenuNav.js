import { Component } from "react";


class MenuNav extends Component {
    formatName = () => {
        const name = this.props.name.replace(/\s+|\s+/gm,'')
        return name
    }

    render() { 
        const isActive = (this.props.currentTap === this.formatName) ? "active" : "";
        return (
            <div className={'bg-gray-800 active:bg-gray-600 hover:bg-gray-600 py-6 ' + isActive} onClick={((e)=> this.props.handleClick(e, this.formatName() ))} >
                <i className={this.props.icon}></i> { this.props.name }
            </div>
        );
    }
}

export default MenuNav;