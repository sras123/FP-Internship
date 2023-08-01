import React, { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import "react-datepicker/dist/react-datepicker.css";

const start: Date = new Date();
// const minus: any = start.setDate(start.getDate() - 3);
// console.log(minus.toISOString);
const timestamp = new Date().getTime();
const date = 1690873244660;
var dateFormat: Date = new Date(date);

let a = start.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// console.log(start);
// console.log(typeof start);
// console.log(start.toString());
// let b = start.setDate(19);
// console.log(start.getDate());
function App() {
  //datepicker
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleChange = (date: any) => {
    setSelectedDate(date);
    // DateTime.fromISO(date).plus({
    //   days: 4,
    // });
  };

  // luxon
  const c = new Date("2021-01-01");

  const today = DateTime.now();

  const d = DateTime.fromJSDate(c);

  let x = DateTime.fromJSDate(c);

  console.log(x.toMillis());
  console.log(x.toSeconds());

  const toDate = DateTime.fromSeconds(1690879027).toFormat("yyyy MM dd");
  const toTimeStamp = x.toMillis();
  console.log(x.toUTC().toFormat("yyyy MM dd HH:ss"));
  console.log(x.toFormat("yyyy LLL dd"));

  // luxon date -> add no of days
  const AddNoOfDaysToDate: DateTime = DateTime.fromISO("2023-08-01").plus({
    days: 4,
  });
  //luxonf date -> substract no of month
  const SubNoOfMonthToDate: DateTime = DateTime.fromISO("2023-08-01").plus({
    month: -4,
  });

  //timestamp of start of day
  const GetStartOfDayInSeconds = DateTime.fromISO("2023-08-01")
    .startOf("day")
    .toSeconds();

  //timestamp of end of day
  const GetEndOfDayInSeconds = DateTime.fromISO("2023-08-01")
    .endOf("day")
    .toSeconds();

  //timeZone
  const timeZone = "America/Denver";
  const FormatDateTime = DateTime.local().setZone(timeZone);

  return (
    <div className="App">
      <h1>Date and Time</h1>
      <strong>Date:</strong>
      {start.getMonth()}/{start.getDate()}/{start.getFullYear()}
      <br />
      <strong>Hours and Minutes:</strong>
      {start.getHours()}hr ,{start.getMinutes()}min
      <br />
      <strong>Day:</strong>
      {dayNames[a]}
      <br />
      <strong>ISO Date: </strong>
      {start.toISOString()}
      <br />
      <strong> Short Date: </strong>
      {start.toLocaleDateString()}
      <br />
      <strong> Long Date: </strong>
      {start.toDateString()}
      <br />
      <strong>Date to TimeStamp: </strong>
      {timestamp}
      <br />
      <strong>TimeStamp to Date: </strong>
      {dateFormat.getMonth()}/{dateFormat.getDate()}/{dateFormat.getFullYear()}
      <br />
      <strong>Two year back: </strong>
      {c.toDateString()}
      <br />
      <label>
        <strong>Date: </strong>
      </label>
      <DatePicker selected={selectedDate} onChange={handleChange} />
      <h1>Luxon</h1>
      <strong>Today's Date: </strong>
      {today.toISO()}
      <br />
      <strong>Two year back: </strong>
      {d.toISO()}
      <br />
      <strong>TimeStamp to Date: </strong>
      {toDate}
      <br />
      <strong>Date to TimeStamp: </strong>
      {toTimeStamp}
      <br />
      <strong>Added days: </strong>
      {AddNoOfDaysToDate.toFormat("yyyy-MM-dd")}
      <br />
      <strong>Subtracted days: </strong>
      {SubNoOfMonthToDate.toFormat("yyyy-MM-dd")}
      <br />
      <strong>Time stamp of start of the day: </strong>
      {GetStartOfDayInSeconds}
      <br />
      <strong>Time stamp of end of the day: </strong>
      {GetEndOfDayInSeconds}
      <br />
      <strong>Time Zone </strong>
      <br />
      <strong>ISO Format: </strong>
      {FormatDateTime.toISO()} <br />
      <strong>Local String Format: </strong> {FormatDateTime.toLocaleString()}
    </div>
  );
}

export default App;
