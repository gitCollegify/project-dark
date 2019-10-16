import React from 'react';
import {
    homeLight,
    homeDark
} from '../style/main';
class Home extends React.Component {
    state = {
        darkMode : parseInt(localStorage.getItem('darkMode'))===1
    }
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.darkMode !== prevProps.darkMode) {
            this.setState({darkMode: !this.state.darkMode});
        }
    }

    render() {
        const home = this.state.darkMode?homeDark:homeLight;
        return (
            <>
                <div style={home}>
                    <h1>This is home</h1>
                </div>
            </>
        )
    }
}
export default Home;