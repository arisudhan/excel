import React, { useState, useEffect } from "react";


import data from "./constants";
import "./App.css";

function App() {

  const [dataHigh, setDataHigh] = useState([]);
  const [dataLow, setDataLow] = useState([]);
  const [dayHigh, setDayHigh] = useState([])

  useEffect(() => {
    const filterReduceSort = data.filter((obj) => obj.Date === 20200101 &&
      obj.TimeDecimal > 9.15 && obj.TimeDecimal < 9.31
    ).reduce(function (accumulator, curValue) {
      return accumulator.concat(curValue.High)

    }, []

    ).sort(function (a, b) { return a - b })

    setDataHigh(filterReduceSort)
  }, []);
  useEffect(() => {
    const filterReduceSort = data.filter((obj) => obj.Date === 20200101 &&
      obj.TimeDecimal > 9.15 && obj.TimeDecimal < 9.31
    ).reduce(function (accumulator, curValue) {
      return accumulator.concat(curValue.Low)

    }, []

    ).sort(function (a, b) { return a - b })

    setDataLow(filterReduceSort)
  }, []);
  useEffect(() => {
    const dayHigh = [];
    data.filter((obj) => obj.Date === 20200101 && obj.TimeDecimal > 9.08 &&
      obj.TimeDecimal < 16.39)
      .map(obj => {
        (obj.High > dataHigh.at(-1)) ||
          dayHigh.push(obj.High)


      })

    setDayHigh(dayHigh)
  }, []);
  useEffect(() => {
    const dayHighfm = [];
    data.filter((obj) => obj.Date === 20200101 && obj.TimeDecimal > 9.08 &&
      obj.TimeDecimal < 16.39)
      .map((obj) => (
        (obj.High > dataHigh.at(-1))
          ? (dayHighfm.push(obj.High))
          : null


      )})

  setDayHigh(dayHighfm)
}, []);





console.log();


return (
  <div className="app__excelData">

    {

      <h1>{dataHigh.at(-1)}</h1>



    }





  </div>
);
}

export default App;
