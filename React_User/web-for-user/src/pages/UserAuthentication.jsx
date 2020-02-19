import React, { Fragment } from "react";

import UserHeader from "../layout/UserHeader";
import UserAuthBody from "../layout/UserAuthBody";
import UserFooter from "../layout/UserFooter";
import FlexPaperTemplate from "../components/main/FlexPaperTemplate";


const UserAuthentication = props => {

  return (
    <Fragment>
      <UserHeader />
      <FlexPaperTemplate>
        <UserAuthBody />
      </FlexPaperTemplate>
      <UserFooter />
    </Fragment>
  );
};

export default UserAuthentication;
