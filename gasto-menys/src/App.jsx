import './App.css'
import './auth/Login'
import React from 'react';
import { NavigationBar } from './shared/navbar/NavigationBar'
import { Button, Divider, Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"
function App() {
  const [year, setValue] = React.useState(new Date().getFullYear());
  const [months, setMonths] = React.useState([])
  const getMonths = (year) => {
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'];
    let currMonth = new Date().getMonth();
    let currYear = new Date().getFullYear();

    if (currYear > year) setMonths(m);
    else setMonths(m.slice(0, currMonth + 1));

  };


  const changeYear = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
    getMonths(newValue);

  }

  const years = [
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023", },
    { label: "2024", value: "2024" },
  ];
  return (
    <>
      <NavigationBar></NavigationBar>
      <Select
        label="Year"
        className="max-w-xs p-5"
        onChange={changeYear}
      >
        {years.map((year) => (
          <SelectItem key={year.value} value={year.value}>
            {year.label}
          </SelectItem>
        ))}
      </Select>
      <span justify="end" className="text-7xl text-default-500">{year}</span>
      <Divider></Divider>


      <div className="grid grid-rows-3 gap-12 p-10">
        {[0, 1, 2].map(row => (
          <div key={row} className="grid grid-cols-4 gap-10">
            {months.slice(row * 4, (row + 1) * 4).map((month, index) => (
              <Card key={index} className="h-24 items-center justify-center" isPressable="true">
                <CardHeader className="justify-center">{month}</CardHeader>
              </Card>
            ))}
          </div>
        ))}
      </div>

    </>
  )
}

export default App


