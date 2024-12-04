import './FjerdeEtageStyle.css'
import { useRouteContext } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

function FjerdeEtage (){

  const context = useRouteContext({ from: "/" });

  function handlebutton(lokale){

    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0];
    context.setBookingInfo({etage: "4", date: formattedDate, lokale: lokale, startTime: "", endTime: ""});
  }
return(
  <div>   
    {/* svg kode eksporteret fra illustator */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 595.28">
      <g id="Layer_8" data-name="Layer 8">
        <g id="Layer_2" data-name="Layer 2">
          <polygon className="cls-1" points="99.21 101.09 99.21 362.8 415.89 362.8 415.89 513.37 607.1 513.37 607.1 488.28 658.48 488.28 658.48 224.18 460.11 224.18 460.11 101.09 99.21 101.09"/>
          <rect className="cls-2" x="99.21" y="224.18" width="123.68" height="138.62"/>
        </g>
        <g id="Layer_4" data-name="Layer 4">
          <polygon className="cls-2" points="488.39 342.29 488.39 362.8 368.69 362.8 368.69 287.51 328.46 287.51 328.46 224.18 532.8 224.18 532.8 258.04 479.43 258.04 479.43 299.46 488.39 299.46 488.39 342.29"/>
          <path className="icon" d="m504.72,301.83v-6.25h-1.04v-4.75c0-.4.15-.75.45-1.05s.65-.45,1.05-.45h2.18c.4,0,.75.15,1.05.45s.45.65.45,1.05v4.75h-1.04v6.25h-3.08Zm1.54-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07,0-.42.15-.78.45-1.08s.66-.45,1.07-.45.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Zm7.17,13.63v-5h-2.17l1.79-6.48c.1-.33.29-.58.55-.76.27-.18.58-.26.95-.26s.68.09.95.26c.27.18.45.43.55.76l1.79,6.48h-2.17v5h-2.25Zm1.13-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07s.15-.78.45-1.08c.3-.3.66-.45,1.07-.45s.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Z"/>
        </g>
        <polyline className="cls-3" points="532.8 258.04 532.8 342.29 488.39 342.29 488.39 299.46 479.43 299.46 479.43 258.04 532.8 258.04"/>
        <path className="icon" d="m557.9,291.08v-1.28h5.24v-5.31h5.24v-5.31h6.53v1.28h-5.24v5.31h-5.24v5.31h-6.53Z"/>
        <path className="icon" d="m281.33,323.08h3.78v-5.35h1.26v-3.46c0-.69-.25-1.29-.74-1.78s-1.09-.74-1.78-.74h-1.26c-.69,0-1.29.25-1.78.74-.49.49-.74,1.09-.74,1.78v3.46h1.26v5.35Zm1.89-12.41c.48,0,.9-.17,1.24-.52s.52-.76.52-1.24-.17-.9-.52-1.24-.76-.52-1.24-.52-.9.17-1.24.52-.52.76-.52,1.24.17.9.52,1.24.76.52,1.24.52Zm5.51,2.96h6.3l-3.15-5.04-3.15,5.04Zm3.15,8.19l3.15-5.04h-6.3l3.15,5.04Zm-13.7,4.72c-.5,0-.94-.19-1.32-.57s-.57-.82-.57-1.32v-18.9c0-.48.19-.92.57-1.31s.82-.58,1.32-.58h18.9c.48,0,.92.19,1.31.58s.58.82.58,1.31v18.9c0,.5-.19.94-.58,1.32s-.82.57-1.31.57h-18.9Zm0-1.89h18.9v-18.9h-18.9v18.9Zm0,0v-18.9,18.9Z"/>
      </g>
      <g id="Lokaler">
        <Link to="/BookLokale">
          <g id="_4.1" data-name="4.1" onClick={() => handlebutton("4.1")} style={{cursor: 'pointer'}}>
            <rect className="cls-4" x="99.21" y="101.09" width="211.09" height="123.09"/>
            <text style={{cursor: 'pointer'}} onClick={() => console.log('Lokale 4.1 clicked')} className="cls-6" transform="translate(207.21 166.17)"><tspan x="0" y="0">4.1</tspan></text>
          </g>
          <g id="_4.2" data-name="4.2" onClick={() => handlebutton("4.2")} style={{cursor: 'pointer'}}>
            <rect className="cls-4" x="310.31" y="100.79" width="150.87" height="123.09"/>
            <text style={{cursor: 'pointer'}} onClick={() => console.log('Lokale 4.2 clicked')} className="cls-6" transform="translate(376.13 166.17)"><tspan x="0" y="0">4.2</tspan></text>
          </g>
          <g id="_4.3" data-name="4.3" onClick={() => handlebutton("4.3")} style={{cursor: 'pointer'}}>
            <polygon className="cls-4" points="415.89 362.8 488.39 362.8 488.39 342.29 588.77 342.29 588.77 224.18 658.48 224.18 658.48 488.28 607.1 488.28 607.1 513.37 415.89 513.37 415.89 362.8"/>
            <text style={{cursor: 'pointer'}} onClick={() => console.log('Lokale 4.3 clicked')} className="cls-6" transform="translate(532.81 418.24)"><tspan x="0" y="0">4.3</tspan></text>
          </g>
        </Link>
      </g>
    </svg>
  </div>
)
}

export default FjerdeEtage