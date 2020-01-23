import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "투표명",
        field: "name"
      },
      {
        title: "분류",
        field: "type",
        lookup: { jiseon: "지선", daeseon: "대선" }
      },
      {
        title: "시작일자",
        field: "startDate"
        // type: "numeric"
      },
      {
        title: "종료일자",
        field: "endDate"
      }
    ],
    data: [
      {
        name: "제 1회 대통령 선거",
        type: "jiseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      },
      {
        name: "제 1회 인천 시의원 선거",
        type: "daeseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      },
      {
        name: "제 2회 인천 시의원 선거",
        type: "daeseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      },
      {
        name: "제 3회 인천 시의원 선거",
        type: "daeseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      },
      {
        name: "제 4회 인천 시의원 선거",
        type: "daeseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      },
      {
        name: "제 5회 인천 시의원 선거",
        type: "daeseon",
        startDate: "2020-01-22",
        endDate: "2020-01-25"
      }
    ]
  });

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
