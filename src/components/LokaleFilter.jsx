import { useState } from 'react';
import LedigeLokalerList from "./../components/filter/ledigeLokalerList";
import Filter from './../components/filter/filter';
import LokaleKort from './filter/Kort';

const Container ={
  display:"flex",
  flexDirection: "column",
}

function LokaleFilter() {
  const [filterDate, setFilterDate] = useState(new Date());

  //chatgpt linje formater om til yyyy-mm-dd format
  const formattedDate = filterDate.toISOString().split('T')[0];
    
  const lokaleListe = [
    //1
    {lokale: "Audiotoriet", etage: "1"},
    {lokale: "Lobbyen", etage: "1"},
    {lokale: "3D print", etage: "1"},
    //2
    {lokale: "Medialab", etage: "2"},
    {lokale: "2.21", etage: "2"},
    //3
    {lokale: "3.1", etage: "3"},
    {lokale: "3.2", etage: "3"},
    {lokale: "3.4", etage: "3"},
    {lokale: "3.5", etage: "3"},
    {lokale: "3.6", etage: "3"},
    {lokale: "3.7", etage: "3"},
    {lokale: "3.9 Open Learning", etage: "3"},
    {lokale: "3.10", etage: "3"},
    {lokale: "3.11", etage: "3"},
    //4
    {lokale: "4.1", etage: "4"},
    {lokale: "4.2", etage: "4"},
    {lokale: "4.3", etage: "4"},
  ];

  const times = [
    { startTime: "08:30", endTime: "09:30" },
    { startTime: "09:30", endTime: "10:30" },
    { startTime: "10:30", endTime: "11:30" },
    { startTime: "11:30", endTime: "12:30" },
    { startTime: "12:30", endTime: "13:30" },
    { startTime: "13:30", endTime: "14:30" },
    { startTime: "14:30", endTime: "15:30" },
    { startTime: "15:30", endTime: "16:30" },
  ];

  return (
    <div style={Container}>
      <Filter
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <LedigeLokalerList
        lokaler={lokaleListe}
        times={times}
        date={formattedDate}
      />
      <LokaleKort />
    </div>
  )
}

export default LokaleFilter;