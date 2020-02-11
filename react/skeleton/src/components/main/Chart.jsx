import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import { date_to_str_onlyDate } from "../../common.js";

const test = [
  {
    name: "01:00",
    후보1: 4000,
    후보2: 2400,
    후보3: 2400
  },
  {
    name: "02:00",
    후보1: 3000,
    후보2: 1398,
    후보3: 2210
  },
  {
    name: "03:00",
    후보1: 2000,
    후보2: 9800,
    후보3: 2290
  },
  {
    name: "04:00",
    후보1: 2780,
    후보2: 3908,
    후보3: 2000
  },
  {
    name: "05:00",
    후보1: 1890,
    후보2: 4800,
    후보3: 2181
  },
  {
    name: "06:00",
    후보1: 2390,
    후보2: 3800,
    후보3: 2500
  },
  {
    name: "07:00",
    후보1: 3490,
    후보2: 4300,
    후보3: 2100
  },
  {
    name: "08:00",
    후보1: 4000,
    후보2: 2400,
    후보3: 2400
  },
  {
    name: "09:00",
    후보1: 3000,
    후보2: 1398,
    후보3: 2210
  },
  {
    name: "10:00",
    후보1: 2000,
    후보2: 9800,
    후보3: 2290
  },
  {
    name: "11:00",
    후보1: 2780,
    후보2: 3908,
    후보3: 2000
  },
  {
    name: "12:00",
    후보1: 1890,
    후보2: 4800,
    후보3: 2181
  },
  {
    name: "13:00",
    후보1: 2390,
    후보2: 3800,
    후보3: 2500
  },
  {
    name: "14:00",
    후보1: 3490,
    후보2: 4300,
    후보3: 2100
  },
  {
    name: "15:00",
    후보1: 4000,
    후보2: 2400,
    후보3: 2400
  },
  {
    name: "16:00",
    후보1: 3000,
    후보2: 1398,
    후보3: 2210
  },
  {
    name: "17:00",
    후보1: 2000,
    후보2: 9800,
    후보3: 2290
  },
  {
    name: "18:00",
    후보1: 2780,
    후보2: 3908,
    후보3: 2000
  },
  {
    name: "19:00",
    후보1: 1890,
    후보2: 4800,
    후보3: 2181
  },
  {
    name: "20:00",
    후보1: 2390,
    후보2: 3800,
    후보3: 2500
  },
  {
    name: "21:00",
    후보1: 3490,
    후보2: 4300,
    후보3: 2100
  },
  {
    name: "22:00",
    후보1: 3490,
    후보2: 4300,
    후보3: 2100
  },
  {
    name: "23:00",
    후보1: 3490,
    후보2: 4300,
    후보3: 2100
  }
];

const Chart = props => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    const [voteCode] = props.selected;
    console.log("voteCode다", voteCode);
    const fetchData = async () => {
      setLoading(true);
      const nowDate = date_to_str_onlyDate(new Date());
      console.log(nowDate);
      try {
        const response = await axios.get(
          "http://54.180.134.217:8080/api/statistics/getCandiPick/" +
            voteCode +
            "/" +
            nowDate +
            "/14"
        );
        const candiResponse = await axios.get(
          "http://54.180.134.217:8080/api/candi/getCandiVotecode/" + voteCode
        );
        // setState(response.data);
        setCandidate(candiResponse.data);
        console.log("시간대별투표정보::");
        console.log(response.data);
        console.log("후보자::");
        console.log(candidate);
        let tmp = [];
        for (let i = 0; i < 24; i++) {
          tmp.push({ name: (i < 10 ? "0" + i : i) + ":00" });
        }
        setData(tmp);
        console.log("확인::");
        console.log(tmp);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.selected]);

  if (loading) {
    return (
      <>
        <LinearProgress />
      </>
    );
  }

  return (
    <>
      <h1>선거 모니터링</h1>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, "auto"]} />
            <Tooltip />
            <Legend />

            <Bar dataKey="후보1" label />
            <Bar dataKey="후보2" fill="#82ca9d" />
            <Bar dataKey="후보3" fill="#82caff" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>투표 정보가 없습니다.</p>
      )}
    </>
  );
};

export default Chart;
