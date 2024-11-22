import { useState } from 'react';
import LedigeLokalerList from "./../components/filter/ledigeLokalerList";
import Filter from './../components/filter/filter';

const Container ={
  display:"flex",
  flexDirection: "column",
}

function LokaleFilter() {
  const [etage, setEtage] = useState('');

  const [filterDate, setFilterDate] = useState(new Date());

  //chatgpt kode formater om til yyyy-mm-dd
  const formattedDate = filterDate.toISOString().split('T')[0];

  //imported data from supabase
  const lokaleListe = [
    //1
    "Audiotoriet",
    "Lobbyen",
    "3D print",
    //2
    "Medialab",
    //3
    "3.1",
    "3.2",
    "3.4",
    "3.5",
    "3.6",
    "3.7",
    "3.8 Open Learning",
    "3.9 Open Learning",
    "3.10",
    "3.11",
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
        etage={etage}
        setEtage={setEtage}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <LedigeLokalerList
        lokaler={lokaleListe}
        times={times}
        date={formattedDate}
        etage={etage}
      />
    </div>
  )
}

export default LokaleFilter;