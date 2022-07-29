import React, { useState, useEffect } from "react";


import data from "./constants";
import "./App.css";

function App() {

  const [dataHigh, setDataHigh] = useState([]);
  const [dataLow, setDataLow] = useState([]);


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




  console.log(dataLow);


  return (
    <div className="app__excelData">

      {

        <h1>{dataLow}</h1>



      }





    </div>
  );
}

export default App;
