import React, { Fragment } from "react";
import UserHeader from "../layout/UserHeader";
import UserFooter from "../layout/UserFooter";
import FlexPaperTemplate from "../components/main/FlexPaperTemplate";
import { Link, Button } from "@material-ui/core";


const PageNotFound = props => {
  const clear = () => {
    sessionStorage.clear();
  }

  return (
    <Fragment>
      <FlexPaperTemplate>
        <h1>페이지를 찾을 수 없습니다.</h1>
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
      {/* <UserFooter /> */}
    </Fragment>
  )
}

export default PageNotFound