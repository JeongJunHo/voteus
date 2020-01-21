import React, { Component, Fragment } from 'react';
import Header from '../layout/Header';
import VoteTab from '../layout/VoteTab';
import Footer from '../layout/Footer';
import axios from 'axios'


class VoteMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            first: 0,
            voteList: []
        };
    }

    componentDidMount(){
        this._getList();
    }

    _getList(){
        const voteApi = 'dummy/vote_list.json';

        axios.get(voteApi)
            .then(res => {
                this.setState({
                    voteList: res.data.voteList
                });
                console.log(this.state.voteList)
                {this.state.voteList.map((voteitem, index) => {
                    if (voteitem.valid === 1 && this.state.cnt === 0) {
                        console.log(index)
                        this.setState({cnt: 1})
                        this.setState({first: index})
                    }
                })}
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        // console.log(this.state.voteList)
        
        return (
            <Fragment>
                <Header />
                {/* <VoteTab /> */}
                <ul className="votetab">
                    {this.state.voteList.map((vote, i) => {
                        if (vote.valid) {
                            // return <Vote i={i} name={vote.name} click={this.state.click} />
                            return <VoteTab key={vote.id} i={i} name={vote.name} first={this.state.first} />
                        }
                    })}
                </ul>
                Vote Main
                <Footer />
            </Fragment>
        )
    }
}

export default VoteMain;