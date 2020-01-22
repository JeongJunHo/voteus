import React, { Component, Fragment } from 'react';
import Header from '../layout/Header';
import VoteTab from '../layout/VoteTab';
import Footer from '../layout/Footer';
import axios from 'axios'
// import VoteCandidate from '../components/main/VoteCandidate.jsx';
import VoteGrid from '../components/main/VoteGrid';

import CandidateContext from '../context/CandidateContext';

class VoteMain extends Component {
    constructor(props) {
        super(props);

        const query = new URLSearchParams(props.location.search);
        const click = query.get('click')

        this.state = {
            cnt: 0,
            click: click || 0,
            voteList: [],
            candidateList: []
        };
    }

    componentDidMount(){
        this._getVoteList();
        this._getCandidateList();
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps.location.search, this.props.location.search)
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevClick = prevQuery.get('vote');
        let query = new URLSearchParams(this.props.location.search);
        let click = query.get('vote');
        // console.log(prevClick, click)

        if (prevClick !== click) {
            // console.log(click)
            this.setState({click: parseInt(click)})
            // console.log(typeof click)
        };
    }

    _getVoteList(){
        const voteApi = 'dummy/vote_list.json';

        axios.get(voteApi)
            .then(res => {
                this.setState({
                    voteList: res.data.voteList
                });
                // console.log(this.state.voteList)
                this.state.voteList.map((voteitem, index) => {
                    if (voteitem.valid === 1 && this.state.cnt === 0) {
                        // console.log('호출')
                        this.setState({cnt: 1})
                        this.setState({click: index})
                    }
                })
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    _getCandidateList(){
        const candidateApi = 'dummy/candidate_list.json';

        axios.get(candidateApi)
            .then(res => {
                // console.log(res)
                this.setState({
                    candidateList: res.data.candidateList
                });
                console.log(this.state.candidateList)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        // console.log(this.state.voteList)
        // console.log(this.state.click, this.state.cnt)
        return (
            <Fragment>
                <Header />
                {/* <VoteTab /> */}
                <ul className="votetab">
                    {this.state.voteList.map((vote, i) => {
                        if (vote.valid) {
                            // return <Vote i={i} name={vote.name} click={this.state.click} />
                            return <VoteTab key={vote.id} i={i} name={vote.name} click={this.state.click} cnt={this.state.cnt} />
                        }
                    })}
                </ul>
                
                {/* click, {this.state.click} */}
                <CandidateContext.Provider value={this.state.candidateList.filter(candidate => candidate.votelist === this.state.click + 1)}>
                    <VoteGrid />
                    {/* <VoteGrid list={this.state.candidateList.filter(candidate => (
                        candidate.votelist === this.state.click
                    ))} /> */}
                </CandidateContext.Provider>

                {/* {this.state.click} */}
                {/* {this.state.candidateList} */}
                {/* <VoteCandidate list={this.state.candidateList.filter(candidate => (
                    candidate.votelist === this.state.click
                ))} /> */}
                <Footer />
            </Fragment>
        )
    }
}

export default VoteMain;