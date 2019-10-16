import React from 'react';
import {
    aboutLight,
    aboutDark
} from '../style/main';
class AboutPage extends React.Component {
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
        const home = this.state.darkMode?aboutDark:aboutLight;
        return (
            <>
                <div style={home}>
                    <h1>This is About Page</h1>
                </div>
            </>
        )
    }
}
export default AboutPage;