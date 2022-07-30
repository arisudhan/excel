import React, { useState, useEffect } from "react";


import data from "./constants";
import "./App.css";

function App() {


  const [dayHigh, setDayHigh] = useState([])
  const [dayLow, setDayLow] = useState([])

  useEffect(() => {
    const filterReduceSortH = data.filter((obj) => obj.Date === 20200101 &&
      obj.TimeDecimal > 9.15 && obj.TimeDecimal < 9.31
    ).reduce(function (accumulator, curValue) {
      return accumulator.concat(curValue.High)

    }, []

    ).sort(function (a, b) { return a - b })

    console.log(filterReduceSortH.at(-1));

    const filterReduceSortL = data.filter((obj) => obj.Date === 20200101 &&
      obj.TimeDecimal > 9.15 && obj.TimeDecimal < 9.31
    ).reduce(function (accumulator, curValue) {
      return accumulator.concat(curValue.Low)

    }, []

    ).sort(function (a, b) { return a - b })

    console.log(filterReduceSortL.at(1));

    const dayHighFf = [];
    data.filter((obj) => obj.Date === 20200101 && obj.TimeDecimal > 9.08 &&
      obj.TimeDecimal < 16.39)
      .forEach((obj) => {
        if (obj.High > filterReduceSortH.at(-1)) {
          dayHighFf.push(obj.High);
        }

      });

    setDayHigh(dayHighFf)

    const dayLowFf = [];
    data.filter((obj) => obj.Date === 20200101 && obj.TimeDecimal > 9.08 &&
      obj.TimeDecimal < 16.39)
      .forEach((obj) => {
        if (obj.Low < filterReduceSortL.at(1)) {
          dayLowFf.push(obj.Low);
        }

      });

    setDayLow(dayLowFf)
  }, []);

  console.log(dayHigh)
  console.log(dayLow);







  return (
    <div className="app__excelData">

      {
        <div>

          <h3>{dayHigh}</h3>

          <h3>{dayLow}</h3>

        </div>



      }





    </div>
  );
}

export default App;
