import React from 'react';
const SideNav = dynamic(() => import('../components/sidenav'), {
    ssr: false
})
const AboutPage = dynamic(() => import('../components/about'), {
    ssr: false
})
import dynamic from "next/dist/next-server/lib/dynamic";
class About extends React.Component {
    state = {
        darkMode : false
    }
    componentDidMount() {
    }
    onChange =(e)=> {
        this.setState({darkMode:!this.state.darkMode});
    }
    render() {
        return (
            <>
                <div style={{display:'flex'}}>
                    <SideNav onChange={this.onChange}/>
                    <AboutPage darkMode={this.state.darkMode}/>
                </div>
                <style jsx>{`.mainBody{margin:0; background-color: blue}`}</style>
            </>
        )
    }
}
export default About;