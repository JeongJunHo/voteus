import React, { useState, Fragment } from "react";

import UserAuthName from "../components/main/UserAuthName";
import UserAuthFace from "../components/main/UserAuthFace";
import UserAuthFinger from "../components/main/UserAuthFinger";
import UserAuthComplete from "../components/main/UserAuthComplete";

import UserNameContext from "../context/UserNameContext";

const UserAuthBody = props => {
  const [number, setNumber] = useState(0);
  const [userinfo, setUserInfo] = useState("");

  if (number === 0) {
    return (
      <Fragment>
        <UserAuthName
          number={number}
          setNumber={setNumber}
          userinfo={userinfo}
          setUserInfo={setUserInfo}
        />
      </Fragment>
    );
  } else if (number === 1) {
    return (
      <UserNameContext.Provider value={userinfo.name}>
        <UserAuthFace
          number={number}
          setNumber={setNumber}
          userinfocode={userinfo.code}
        />
      </UserNameContext.Provider>
    );
  } else if (number === 2) {
    return (
      <Fragment>
        <UserAuthFinger
          number={number}
          setNumber={setNumber}
          userinfocode={userinfo.code}
        />
      </Fragment>
    );
  } else {
    return (
      <UserNameContext.Provider value={userinfo.name}>
        <UserAuthComplete userinfocode={userinfo.code} />
      </UserNameContext.Provider>
    );
  }
};

export default UserAuthBody;
