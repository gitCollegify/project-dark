import React from 'react';
const lightBtn = {
    text: '#000',
    background: '#027'
}
const darkBtn = {
    text: '#fff',
    background: '#000'
}

const style = localStorage.getItem('darkMode')?darkBtn:lightBtn;
class  Button extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <button className={``} style={style} type={`button`} onClick={this.props.onClick}>click here</button>
        )
    }
}
export default Button;