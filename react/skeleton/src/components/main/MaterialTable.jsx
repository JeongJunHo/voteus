import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import date_to_str from "../../common.js";

import axios from "axios";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "코드",
        field: "code"
      },
      {
        title: "투표명",
        field: "name"
      },
      {
        title: "분류",
        field: "middlepart",
        lookup: { ji: "지선", dae: "대선" }
      },
      {
        title: "시작일자",
        field: "start",
        type: "datetime"
      },
      {
        title: "종료일자",
        field: "end",
        type: "datetime"
      }
    ],
    // data:
    data: [
      {
        code: "1",
        name: "111111",
        middlepart: "ji",
        start: "2020-01-22",
        end: "2020-01-25"
      },
      {
        code: "2",
        name: "2222222",
        middlepart: "dae",
        start: "2020-01-22",
        end: "2020-01-25"
      }
    ]
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://54.180.134.217:8080/api/vote/getVoteAllList"
          // "data/dummy.json"
        );
        const restate = {
          ...state,
          data: response.data
        };
        console.log(restate);
        setState(restate);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <>대기중</>;
  }

  return (
    <MaterialTable
      title="투표 관리"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();

              let insertData = { ...newData };
              insertData.start = date_to_str(insertData.start);
              insertData.end = date_to_str(insertData.end);
              axios
                .post(
                  "http://54.180.134.217:8080/api/vote/insertVote",
                  JSON.stringify(insertData),
                  {
                    headers: { "Content-Type": "application/json" }
                  }
                )
                .then(ret => console.log(ret));

              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();

              axios
                .delete(
                  "http://54.180.134.217:8080/api/vote/delVote/" + oldData.code
                )
                .then(ret => console.log(ret));

              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
