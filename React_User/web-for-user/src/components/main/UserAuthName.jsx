import React, { useState, Fragment } from 'react';
import axios from 'axios';

const UserAuthName = props => {
    const [name, setName] = useState('');
    const [birth_registration_number, setBirthRegistrationNumber] = useState('');
    const [area_registration_number, setAreaRegistrationNumber] = useState('');

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeBirthRegistrationNumber = e => {
        if (e.target.value.length <= 6) {
            setBirthRegistrationNumber(e.target.value)
        }
    }

    const handleChangeAreaRegistrationNumber = e => {
        if (e.target.value.length <= 7) {
            setAreaRegistrationNumber(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const registration_number = birth_registration_number + area_registration_number
        
        if (name.length < 2) {
            alert('이름 입력')
        } else if (birth_registration_number.length !== 6 || area_registration_number.length !== 7) {
            alert('주민번호 입력')
        } else {
            const data = {
                code: registration_number,
                name: name
            }

            // axios
            // axios.get('http://54.180.134.217:8080/api/vote/getVoteAllList/'+registration_number, data)
            axios.get('주소'+registration_number, data)
            .then(res => {
                console.log(res)
                if (res === 'true') {
                    console.log(props.userinfo)
                    props.setUserInfo(userinfo => data)
                    props.setNumber(number => number + 1)
                } else {
                    alert('정보가 일치하지 않습니다.')
                }
            })
            props.setUserInfo(userinfo => data) // test
            props.setNumber(number => number + 1) // 임시(삭제 필요)
        }
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
                    <input
                        type="number"
                        value={birth_registration_number}
                        onChange={handleChangeBirthRegistrationNumber}
                    />
                    -
                    <input type="number" value={area_registration_number} onChange={handleChangeAreaRegistrationNumber}/>
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