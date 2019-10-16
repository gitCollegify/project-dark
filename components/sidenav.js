import React from 'react';
import Link from 'next/link';
import {sideNavLight, sideNavDark, profileLight, profileDark, profileImg, navDark, navLight} from '../style/main';
import Toggle from "./toggle";
class  SideNav extends React.Component {
    state = {
        darkMode : parseInt(localStorage.getItem('darkMode'))===1
    }
    componentDidMount() {

    }

    onChange =(e)=> {
        const newMode = parseInt(localStorage.getItem('darkMode'))===1?0:1;
        this.setState({darkMode:newMode}, ()=>{
            localStorage.setItem('darkMode', newMode)
        });
        this.props.onChange();
    }

    render() {
        const sideNav = this.state.darkMode?sideNavDark:sideNavLight;
        const profile = this.state.darkMode?profileDark:profileLight;
        const nav = this.state.darkMode?navDark:navLight;
        return (
            <>
                <div style={sideNav}>
                    <div style={profile}>
                        <img
                            style={profileImg}
                            src={`https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-edit-profile-icon-png-image_313044.jpg`}
                        />
                        <div style={{fontSize: '18px', paddingTop:'6%', fontWeight:'bold'}}>
                            <p>Name : Chandan Kumar Gupta</p>
                            <p>Email : chandan@collegify.com</p>
                            <p>Mode : Light<Toggle onChange={this.onChange} checked={this.state.darkMode}/> Dark</p>
                        </div>
                    </div>
                    <ul style={nav}>
                        <li><Link href={`./`}><a style={{textDecoration:'none', color:'inherit'}}>Home</a></Link></li>
                        <li><Link href={`./about`}><a style={{textDecoration:'none', color:'inherit'}}>About</a></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
export default SideNav;