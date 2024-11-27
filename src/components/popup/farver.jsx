import { CloseButton, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { IoInformation } from "react-icons/io5";
import { useRouteContext } from '@tanstack/react-router';


function FarvePopup({onClose}) {
  const theme = useMantineTheme();
 
  const context = useRouteContext({ from: "/BookLokale" });


    const centerBackground={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: " 3"
    }

    const confirmStyle={

        display:"flex",
        flexDirection:"column",
        backgroundColor: "#FFF",
        bordorRadius: "4px",
        padding:"12px 16px",
        width:"422px",
    }
    const buttonStyle = {
    borderColor:"red",
    
     width:"fit-content",
     justifySelf:"right",
    }

    return (
          <div style={centerBackground}>
              <div style={confirmStyle}>
                <div style={{display:"flex", justifyContent:"space-between"}}>           
                  <h2 style={{margin:"0",color:theme.colors.red[9]}}>Farverne betyder</h2>
                  <span>
                  <button style={buttonStyle}>
                  <IoInformation 
                  style={{
                  color:"red",
                  fontSize:"24px"}}  />
                  </button>
                <CloseButton onClick={onClose} />
                </span>
                  </div>
                  <ul style={{listStyle:"none",padding:"0"}}>

                    <li style={{display:"flex"}}>
                      <div style={{width:"20px", height:"20px", backgroundColor: theme.colors.green[8],margin:"0 10px", borderRadius:"50%"}}>
                      </div> 
                      Lokalet er frit
                      </li>

                    <li style={{display:"flex"}}>
                      <div style={{width:"20px", height:"20px",backgroundColor: theme.colors.yellow[8] ,margin:"0 10px", borderRadius:"50%"}}>
                      </div>
                      Booket af en studerende
                      </li>

                    <li style={{display:"flex"}}>
                      <div style={{width:"20px", height:"20px",backgroundColor: theme.colors.red[8] ,margin:"0 10px", borderRadius:"50%"}}>
                      </div>

                      Booket af en underviser
                    </li>

                    <li style={{display:"flex"}}>
                      <div style={{width:"20px", height:"20px",backgroundColor: theme.colors.cyan[8] ,margin:"0 10px", borderRadius:"50%"}}></div>
                      Din valgte booking
                    </li>

                  </ul>     
              </div>
          </div>
    )
}

export default FarvePopup