import { Link } from "react-router-dom";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
}
from "react-vis";
import { useState, useEffect } from "react";

const Trade = () => {
  const [Data, setData] = useState([
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ]);

  const [Text, setText] = useState("h52");

  // useEffect(() => {
  //   fetch("http://localhost:3000/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setText(data.time);
  //     });
  // },[]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/red", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(Data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <h1>Trade</h1>
      <p> {Text} </p>
      <Link to="/">Reset</Link>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={Data} />
      </XYPlot>
    </div>
  );
};

export default Trade;