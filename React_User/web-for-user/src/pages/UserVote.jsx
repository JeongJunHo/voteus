import React, { useEffect, useState, Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserVoteStandBy from '../layout/UserVoteStandBy';
import UserVoteEnd from '../layout/UserVoteEnd';
import UserFooter from '../layout/UserFooter';

import { Redirect } from 'react-router-dom';

import VoteListContext from '../context/VoteListContext';
import PartyListContext from '../context/PartyListContext';

import FlexPaperTemplate from "../components/main/FlexPaperTemplate";

import axios from 'axios';

import {
  LinearProgress,
  Link,
  Button
} from "@material-ui/core";

const UserVote = ({match, history}) => {
  const [votelist, setVoteList] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(null);
  const [result, setResult] = useState(null);
  const [party, setParty] = useState(null);
  const [available, setAvailable] = useState(true)
  const [isvote, setIsVote] = useState(true);

  useEffect(() => {
    setLoading(true)
    // console.log(sessionStorage.getItem("user"), match.params.code)

    if (sessionStorage.getItem("user") === match.params.code) {
      // history.push('/');
      setAvailable(true)
      
      let tempParty = {}
      const partyData = async () => {
        try {
          const res3 = await axios.get(
            "http://54.180.134.217:8080/api/party/getPartyAllList/"
          )
          for (let index in res3.data) {
            // console.log(res3.data[index])
            tempParty[res3.data[index].p_code] = res3.data[index].p_name
          }
        } catch (error) {
          console.log(error)
        }
        // console.log(tempParty)
        setParty(tempParty)
      }
      partyData();
  
      // axios (Vote & Candidate)
      const data = {
        code: match.params.code
      }
  
      const voteMap = new Map()
      const resultMap = new Map()
      axios.get(
        'http://54.180.134.217:8080/api/vote/getVoteList/'
        + match.params.code,
        data
      )
      .then(res => {
        // console.log(res.data)
        console.log(res.data.length)
        if (res.data.length === 0) {
          setIsVote(false)
          console.log(isvote)
        } else {
          for (let vote of res.data) {
            // console.log('vote', vote)
            const candidatelist = []
            const candidateData = async () => {
              try {
                const res2 = await axios.get(
                  'http://54.180.134.217:8080/api/candi/getCandiVotecode/'
                  + vote.code,
                  {votecode: vote.code}
                )
                candidatelist.push(res2.data)
              } catch (error) {
                console.log(error)
              }
            }
            candidateData();
    
            voteMap.set(vote, candidatelist)
            setVoteList(voteMap)
            
            resultMap.set(vote.code, null)
            setResult(resultMap)
          }
        }
        setStatus('standby')
      })
      .catch(error => console.log(error))
    } else {
      setAvailable(false)
    }
    setLoading(false)
  }, [match.params.code])

  const clear = () => {
    sessionStorage.clear();
  }

  if (loading === false) {
    if (available === true) {
      if (isvote === true) {
        if (status === 'vote') {
          return (
            <Fragment>
              <UserHeader>
                <h1>투표 페이지(header)</h1>
              </UserHeader>
              <FlexPaperTemplate>
                <VoteListContext.Provider value={votelist}>
                  <PartyListContext.Provider value={party}>
                    <UserVoteBody
                      user={match.params.code}
                      username={match.params.name}
                      setStatus={setStatus}
                      result={result}
                      setResult={setResult}
                    />
                  </PartyListContext.Provider>
                </VoteListContext.Provider>
              </FlexPaperTemplate>
              <UserFooter />
            </Fragment>
          )
        } else if (status === 'standby') {
            return (
              <Fragment>
                <UserHeader>
                  <h1>투표 페이지(header)</h1>
                </UserHeader>
                <FlexPaperTemplate>
                  <UserVoteStandBy
                    votelist={votelist}
                    setStatus={setStatus}
                    username={match.params.name}
                  />
                </FlexPaperTemplate>
                <UserFooter />
              </Fragment>
            )
        } else if (status === 'finish') {
            return (
              <Fragment>
                <UserHeader>
                  <h1>투표 페이지(header)</h1>
                </UserHeader>
                <FlexPaperTemplate>
                  <UserVoteEnd />
                </FlexPaperTemplate>
                <UserFooter />
              </Fragment>
            )
        } else {
          return (
            <Fragment>
              <LinearProgress />
            </Fragment>
          )
        }
      } else {
        return (
          <Fragment>
            <UserHeader />
              <FlexPaperTemplate>
                <h1>투표 정보가 없습니다.</h1>
                <Link href="/">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={clear}
                  >
                    돌아가기
                  </Button>
                </Link>
              </FlexPaperTemplate>
            <UserFooter />
          </Fragment>
        )
      }
    } else {
      return (
        <Fragment>
          <UserHeader />
          <Redirect to="/" />
          <UserFooter />
        </Fragment>
      )
    }
  } else {
    return (
      <Fragment>
        <LinearProgress />
      </Fragment>
    )
  }
}

export default UserVote;