import LedigeLokalerItem from "./ledigeLokalerItem"

const Lokaler = {
  margin:"0 auto",
  borderRadius: "8px",
  background: "#A5D8FF",
  width:"926px",
  padding:"26px 55px",
  color: "#364FC7",
  marginBottom:"263px",
}
const LokaleOversigtStyle = {
  display:"flex",
  flexDirection:"column",

  height:"515px",
  overflowY:"scroll",
 
}

function LedigeLokalerList({lokaler, etage}) {

   const filteredLokaler = lokaler.filter((lokale) => lokale.value.includes(etage));
     
  return (
    <div style={Lokaler}>
        <h1>Ledige lokaler idag </h1>

        <div style={LokaleOversigtStyle}>

            {filteredLokaler.map((lokale) => (
                <LedigeLokalerItem lokale={lokale} />
            ))}

        </div>
    </div>
  )
}

export default LedigeLokalerList;