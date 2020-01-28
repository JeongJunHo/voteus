import React, { useState, Fragment } from 'react';
// import axios from 'axios';

const UserAuthName = props => {
    const [name, setName] = useState('');
    const [registration_number, setRegistrationNumber] = useState('');

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeRegistrationNumber = e => {
        setRegistrationNumber(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: "name",
            registration_number: "registration_number"
        }
        console.log(data)
        // axios
        props.setNumber(number => number + 1)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    이름 입력:
                    <input type="text" value={name} onChange={handleChangeName}/>
                </label>
                <label>
                    주민번호 입력:
                    <input type="text" value={registration_number} onChange={handleChangeRegistrationNumber}/>
                </label>
                {/* onClick을 같이 사용하면 */}
                {/* form submission canceled because the form is not connected react */}
                {/* 에러가 발생한다. */}
                <input type="submit" value="Submit"/>
            </form>
        </Fragment>
    )
}

export default UserAuthName;