import React from 'react';
import {Link} from 'react-router-dom';

const CandidateList = props => {
    return (
        <div>
            {props.list.map((candidate, i) => {
                return candidate.name
            })}
        </div>
    )
}

export default CandidateList;