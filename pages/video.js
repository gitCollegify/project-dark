import React from 'react';
class Video extends React.Component {
    state = {
        qIndex: -1,
        videoIncrement: 3,
        target: 0,
        qStatus: '',
        questions : [
            {
                title: 'choose one',
                userAns: '',
                correctAns: 2,
                options:[5,7,8,11]
            },
            {
                title: 'another question',
                userAns: '',
                correctAns: 1,
                options:[56,71,55,1]
            },
            {
                title: 'last question',
                userAns: '',
                correctAns: 3,
                options:[3,9,64,33]
            },
        ],
        video: '',
        stops:[]
    }
    componentDidMount() {
        this.setState({ ...this.state, video:'https://www.w3schools.com/tags/mov_bbb.mp4'});
    }

    play = (e) =>{
        if(this.state.qStatus === 'playing'){
            // this.setState({qStatus: 'pause'});
        }
        else {
            this.setState({
                qStatus: 'playing',
                target: this.state.target + this.state.videoIncrement,
                qIndex: this.state.qIndex + 1
            }, () => {
                document.getElementById('myVideo').play();
            })
        }
    }
    onChange =(e)=> {
        var video = e.target;
        var playTime = video.currentTime;
        console.log(playTime);
        if(playTime > 0 && playTime >= this.state.target){
            this.setState({qStatus: 'pause'}, ()=>{
                video.pause();
            })
        }
    }

    optionChange=(e)=>{
        const questions = this.state.questions;
        questions[this.state.qIndex].userAns = e.target.value;
        this.setState({questions: questions}, ()=>{});
    }

    end = (e) =>{
        this.setState({qStatus : 'stopped'});
    }

    load = (e) =>{
        console.log('loaded');
        var video = e.target;
        for(var i=1; i<= video.duration; i++){
            if ((i % this.state.videoIncrement) === 0) {
                console.log(i);
                var stop = this.state.stops;
                stop.push(i);
                this.setState({stops: stop})
            }
        }
    }
    render() {
        const parentThis = this;
        return (
            <>
                {
                    this.state.qStatus === 'pause' &&
                    <div id={'questions'} style={{width:"50%", float: 'left', marginLeft:'5%'}}>
                        <p>{this.state.questions[this.state.qIndex].title}</p>
                        {
                            this.state.questions[this.state.qIndex].options.map(function (opt, oi) {
                                return(
                                    <p key={oi}><input name={'option'} type={'radio'} value={opt} onChange={parentThis.optionChange} />{opt}</p>
                                )
                            })
                        }
                    </div>
                }
                <video style={{float:'left'}} id={'myVideo'} src={this.state.video} onLoadedData={this.load} onTimeUpdate={this.onChange}  onPlay={this.play} onEnded={this.end}/>
                <div id={'customBar'} style={{float:"left", width:'100%'}}>
                    <span style={{cursor:'pointer'}} onClick={this.play} dangerouslySetInnerHTML={{__html:this.state.qStatus === 'playing'?'&#9646;&#9646;':'&#9658;'}}/>
                    <span style={{backgroundColor:'yellow'}}></span>
                </div>
                {/*{
                    this.state.stops.length > 0 &&
                    <p style={{float:'left', width:'100%'}}   >
                        {this.state.stops.map(function(i, key) {
                            return(<span key={key}>{
                                i
                            }, </span>)
                        })
                        }
                    </p>
                }*/}
                {
                    this.state.qStatus === 'stopped' &&
                    <ul id={'result'} style={{marginLeft:'55%'}}>
                        {
                            this.state.questions.map(function (q, i) {
                                return (
                                    <li key={i}>
                                        <p>Question : {q.title}</p>
                                        <p>Your Ans : {q.userAns}</p>
                                        <p>Correct Ans : {q.options[q.correctAns]}</p>
                                        <p>Status: {q.userAns === '' ? 'skipped' : q.userAns == q.options[q.correctAns] ? 'correct' : 'incorrect'}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                <style jsx>{`
                    video{
                    margin:o;
                    padding:0;
                    width: 500px;
                    height:300px;
                    }
                `}</style>
            </>
        )
    }
}
export default Video;