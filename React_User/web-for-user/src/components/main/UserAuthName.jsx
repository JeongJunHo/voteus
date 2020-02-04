import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 700
    // backgroundColor: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
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

  const [name, setName] = useState("");
  const [birth_registration_number, setBirthRegistrationNumber] = useState("");
  const [area_registration_number, setAreaRegistrationNumber] = useState("");

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeBirthRegistrationNumber = e => {
    if (e.target.value.length <= 6) {
      setBirthRegistrationNumber(e.target.value);
    }
  };

  const handleChangeAreaRegistrationNumber = e => {
    if (e.target.value.length <= 7) {
      setAreaRegistrationNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const registration_number =
      birth_registration_number + area_registration_number;

    if (name.length < 2) {
      alert("이름 입력");
    } else if (
      birth_registration_number.length !== 6 ||
      area_registration_number.length !== 7
    ) {
      alert("주민번호 입력");
    } else {
      const data = {
        code: registration_number,
        name: name
      };

      // axios
      // axios.get('http://54.180.134.217:8080/api/vote/getVoteAllList/'+registration_number, data)
      axios.get("주소" + registration_number, data).then(res => {
        console.log(res);
        if (res === "true") {
          console.log(props.userinfo);
          props.setUserInfo(userinfo => data);
          props.setNumber(number => number + 1);
        } else {
          alert("정보가 일치하지 않습니다.");
        }
      });
      props.setUserInfo(userinfo => data); // test
      props.setNumber(number => number + 1); // 임시(삭제 필요)
    }
  };

  return (
    <Fragment>
      <Grid container className={classes.flex}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>투표 시작 전 인증을 시작합니다.</h1>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-full-width"
                    label="이름"
                    style={{ margin: 8 }}
                    placeholder="이름을 입력해주세요."
                    helperText="이름을 입력해주세요."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-full-width"
                    label="주민등록번호"
                    style={{ margin: 8 }}
                    placeholder="앞번호 6자리"
                    helperText="주민등록번호 앞 6자리를 입력해주세요."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="number"
                    value={birth_registration_number}
                    onChange={handleChangeBirthRegistrationNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-full-width"
                    label=" "
                    style={{ margin: 8 }}
                    placeholder="뒷번호 7자리"
                    helperText="주민등록번호 뒷 7자리를 입력해주세요."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="number"
                    value={area_registration_number}
                    onChange={handleChangeAreaRegistrationNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.margin}
                    fullWidth="true"
                    type="submit"
                  >
                    인증
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default UserAuthName;
