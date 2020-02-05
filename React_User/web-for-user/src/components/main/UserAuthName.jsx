import React, { useState, Fragment, useMemo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const UserAuthName = props => {
  const classes = useStyles();

  const [commit, setCommit] = useState(false);
  const [name, setName] = useState("");
  const [birth_registration_number, setBirthRegistrationNumber] = useState("");
  const [area_registration_number, setAreaRegistrationNumber] = useState("");

  const nameError = useMemo(() => (name.length < 2 ? true : false), [name]);
  const namePopup = useMemo(() => {
    if (commit) {
      return name.length >= 2 ? false : true;
    } else {
      return name.length === 0 || name.length >= 2 ? false : true;
    }
  }, [name, commit]);

  const birthRegError = useMemo(
    () => (birth_registration_number.length === 6 ? false : true),
    [birth_registration_number]
  );
  const birthRegPopup = useMemo(() => {
    if (commit) {
      return birth_registration_number.length === 6 ? false : true;
    } else {
      return birth_registration_number.length === 0 ||
        birth_registration_number.length === 6
        ? false
        : true;
    }
  }, [birth_registration_number, commit]);

  const areaRegError = useMemo(
    () => (area_registration_number.length === 7 ? false : true),
    [area_registration_number]
  );
  const areaRegPopup = useMemo(() => {
    if (commit) {
      return area_registration_number.length === 7 ? false : true;
    } else {
      return area_registration_number.length === 0 ||
        area_registration_number.length === 7
        ? false
        : true;
    }
  }, [area_registration_number, commit]);

  const handleChangeName = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleChangeBirthRegistrationNumber = useCallback(e => {
    setBirthRegistrationNumber(e.target.value);
  }, []);

  const handleChangeAreaRegistrationNumber = useCallback(e => {
    setAreaRegistrationNumber(e.target.value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setCommit(true);

    const registration_number =
      birth_registration_number + area_registration_number;

    if (!nameError && !birthRegError && !areaRegError) {
      const data = {
        id_num: registration_number,
        name: name
      };

      // axios
      axios
        .get(
          "http://54.180.134.217:8080/api/voter/getOnlyVotercode/" +
            name +
            "/" +
            registration_number
        )
        .then(res => {
          console.log(res);
          if (res.data != null) {
            console.log(props.userinfo);
            props.setUserInfo(data);
            props.setNumber(number => number + 1);
          } else {
            alert("정보가 일치하지 않습니다.");
          }
        });
      props.setUserInfo(data); // test
      props.setNumber(number => number + 1); // 임시(삭제 필요)
    }
  };

  return (
    <Fragment>
      <h1>투표 시작 전 인증을 시작합니다.</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="standard-full-width"
              label="이름"
              placeholder="이름을 입력해주세요."
              helperText={namePopup ? "2글자이상 입력해주세요." : " "}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              type="text"
              value={name}
              onChange={handleChangeName}
              autoComplete="off"
              error={namePopup}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-full-width"
              label="주민등록번호"
              placeholder="앞번호 6자리"
              helperText={
                birthRegPopup ? "주민등록번호 앞 6자리를 입력해주세요." : " "
              }
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              type="text"
              value={birth_registration_number}
              onChange={handleChangeBirthRegistrationNumber}
              autoComplete="off"
              error={birthRegPopup}
              inputProps={{
                maxLength: 6
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-full-width"
              label=" "
              placeholder="뒷번호 7자리"
              helperText={
                areaRegPopup ? "주민등록번호 뒷 7자리를 입력해주세요." : " "
              }
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              type="text"
              value={area_registration_number}
              onChange={handleChangeAreaRegistrationNumber}
              autoComplete="off"
              error={areaRegPopup}
              inputProps={{
                maxLength: 7
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth="true"
              type="submit"
            >
              인증
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UserAuthName;
