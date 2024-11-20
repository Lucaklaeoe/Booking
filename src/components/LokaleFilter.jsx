import { useState } from 'react';
import LedigeLokalerList from "./../components/filter/ledigeLokalerList";
import Filter from './../components/filter/filter';

const Container ={
  display:"flex",
  flexDirection: "column",
}

function LokaleFilter() {
  const [etage, setEtage] = useState('');
  const [filterDate, setFilterDate] = useState('');

  //imported data from supabase
  const lokaler =[
    { id: 1, name: '1.1', value: 'Etage 1' },
    { id: 2, name: '1.3', value: 'Etage 1' },
    { id: 3, name: '1.4', value: 'Etage 1' },
    { id: 4, name: '2.1', value: 'Etage 2' },
    { id: 5, name: '2.3', value: 'Etage 2' },
    { id: 6, name: '2.4', value: 'Etage 2' },
    { id: 7, name: '2.5', value: 'Etage 2' },
    { id: 8, name: '2.6', value: 'Etage 2' },
    { id: 9, name: '2.7', value: 'Etage 2' },
    { id: 10, name: '2.8', value: 'Etage 2' },
    { id: 11, name: '2.9', value: 'Etage 2' },
    { id: 12, name: '2.10', value: 'Etage 2' },
    { id: 13, name: '3.1', value: 'Etage 3' },
    { id: 14, name: '3.2', value: 'Etage 3' },
    { id: 15, name: '3.3', value: 'Etage 3' },
    { id: 16, name: '3.4', value: 'Etage 3' },
    { id: 17, name: '3.5', value: 'Etage 3' },
    { id: 18, name: '3.6', value: 'Etage 3' },
    { id: 19, name: '3.7', value: 'Etage 3' },
    { id: 20, name: '3.8', value: 'Etage 3' },
    { id: 21, name: '3.9', value: 'Etage 3' },
    { id: 22, name: '3.10', value: 'Etage 3' },
    { id: 23, name: '3.11', value: 'Etage 3' },
    { id: 24, name: '3.12', value: 'Etage 3' },
    { id: 25, name: '3.13', value: 'Etage 3' },
    { id: 26, name: '3.14', value: 'Etage 3' },
    { id: 27, name: '3.15', value: 'Etage 3' },
    { id: 28, name: '3.16', value: 'Etage 3' },
    { id: 29, name: '4.1', value: 'Etage 4' },
    { id: 30, name: '4.2', value: 'Etage 4' },
    { id: 31, name: '4.3', value: 'Etage 4' },
  ]
     
  return (
    <div style={Container}>
      <Filter
        etage={etage}
        setEtage={setEtage}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <LedigeLokalerList
        lokaler={lokaler}
        etage={etage}
      />
    </div>
  )
}

export default LokaleFilter;