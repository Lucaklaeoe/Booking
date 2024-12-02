import './TredjeEtageStyle.css'
import { useRouteContext } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

function TredjeEtage(){

  const context = useRouteContext({ from: "/" });

  function handlebutton(lokale){

    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0];
    context.setBookingInfo({etage: "3", date: formattedDate, lokale: lokale, startTime: "", endTime: ""});
  }

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 595.28">
        <g id="base">
          <g id="Base">
            <polygon className="cls-1" points="322.08 342.49 322.08 454.22 385.42 454.22 385.42 512.78 487.59 512.78 487.59 562.37 648.92 562.37 648.92 181.16 528.22 181.16 528.22 104.08 426.05 104.08 426.05 46.72 270.7 46.72 270.7 227.17 300.57 227.17 300.57 160.84 384.82 160.84 384.82 228.96 485.2 228.96 485.2 297.64 567.06 297.64 567.06 395.66 428.44 395.66 428.44 342.49 322.08 342.49"/>
          </g>
          <g id="Open">
            <polygon className="cls-2" points="533.85 227.46 533.85 196.1 466.93 196.1 466.93 181.16 511.74 181.16 511.74 155.46 528.62 155.46 528.62 181.16 649.32 181.16 649.32 511.28 587.38 511.28 587.38 480.36 532.06 480.36 532.06 511.28 386.71 511.28 386.71 421.8 372.37 421.8 372.37 395.96 322.48 395.96 322.48 342.49 428.84 342.49 428.84 395.66 456.17 395.66 456.17 445.85 479.03 445.85 479.03 424.94 495.31 424.94 495.31 463.78 530.27 463.78 530.27 469.76 588.52 469.76 588.52 395.66 567.46 395.66 567.46 227.46 533.85 227.46"/>
          </g>
          <g id="Layer_6" data-name="Layer 6">
            <rect className="cls-2" x="455.78" y="395.84" width="22.85" height="50.19"/>
            <polygon className="cls-2" points="494.91 424.94 547.05 424.94 547.05 445.85 588.12 445.85 588.12 469.76 529.87 469.76 529.87 463.78 494.91 463.78 494.91 424.94"/>
            <rect className="cls-2" x="547.58" y="395.75" width="41.08" height="50.19"/>
            <rect className="cls-2" x="371.98" y="421.8" width="14.34" height="32.41"/>
            <rect className="cls-2" x="322.08" y="396.09" width="49.89" height="58.26"/>
            <rect className="cls-2" x="547.05" y="227.46" width="20.02" height="70.17"/>
            <path className="icon" d="m559.62,426.8v-1.28h5.24v-5.31h5.24v-5.31h6.53v1.28h-5.24v5.31h-5.24v5.31h-6.53Z"/>
            <path className="icon" d="m458.7,426.88v-1.28h5.24v-5.31h5.24v-5.31h6.53v1.28h-5.24v5.31h-5.24v5.31h-6.53Z"/>
            <path className="icon" d="m340.73,433.09h3.78v-5.35h1.26v-3.46c0-.69-.25-1.29-.74-1.78s-1.09-.74-1.78-.74h-1.26c-.69,0-1.29.25-1.78.74-.49.49-.74,1.09-.74,1.78v3.46h1.26v5.35Zm1.89-12.41c.48,0,.9-.17,1.24-.52s.52-.76.52-1.24-.17-.9-.52-1.24-.76-.52-1.24-.52-.9.17-1.24.52-.52.76-.52,1.24.17.9.52,1.24.76.52,1.24.52Zm5.51,2.96h6.3l-3.15-5.04-3.15,5.04Zm3.15,8.19l3.15-5.04h-6.3l3.15,5.04Zm-13.7,4.72c-.5,0-.94-.19-1.32-.57s-.57-.82-.57-1.32v-18.9c0-.48.19-.92.57-1.31s.82-.58,1.32-.58h18.9c.48,0,.92.19,1.31.58s.58.82.58,1.31v18.9c0,.5-.19.94-.58,1.32s-.82.57-1.31.57h-18.9Zm0-1.89h18.9v-18.9h-18.9v18.9Zm0,0v-18.9,18.9Z"/>
          </g>
          <g id="Layer_7" data-name="Layer 7">
            <path className="icon" d="m516.28,455.69v-6.25h-1.04v-4.75c0-.4.15-.75.45-1.05s.65-.45,1.05-.45h2.18c.4,0,.75.15,1.05.45s.45.65.45,1.05v4.75h-1.04v6.25h-3.08Zm1.54-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07,0-.42.15-.78.45-1.08s.66-.45,1.07-.45.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Zm7.17,13.63v-5h-2.17l1.79-6.48c.1-.33.29-.58.55-.76.27-.18.58-.26.95-.26s.68.09.95.26c.27.18.45.43.55.76l1.79,6.48h-2.17v5h-2.25Zm1.13-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07s.15-.78.45-1.08c.3-.3.66-.45,1.07-.45s.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Z"/>
            <path className="icon" d="m555.34,464.8v-6.25h-1.04v-4.75c0-.4.15-.75.45-1.05s.65-.45,1.05-.45h2.18c.4,0,.75.15,1.05.45s.45.65.45,1.05v4.75h-1.04v6.25h-3.08Zm1.54-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07,0-.42.15-.78.45-1.08s.66-.45,1.07-.45.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Zm7.17,13.63v-5h-2.17l1.79-6.48c.1-.33.29-.58.55-.76.27-.18.58-.26.95-.26s.68.09.95.26c.27.18.45.43.55.76l1.79,6.48h-2.17v5h-2.25Zm1.13-13.63c-.42,0-.78-.15-1.08-.45-.3-.3-.45-.66-.45-1.07s.15-.78.45-1.08c.3-.3.66-.45,1.07-.45s.78.15,1.08.45c.3.3.45.66.45,1.07s-.15.78-.45,1.08c-.3.3-.66.45-1.07.45Z"/>
          </g>
        </g>
        <g id="grupperum">
          <Link to="/BookLokale">
            <rect className="cls-4" x="478.73" y="394.94" width="68.41" height="29.28" onClick={() => handlebutton("3.2")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="620.3" y="410.44" width="29.13" height="33.91" onClick={() => handlebutton("3.9 Open Learning")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="531.66" y="480.29" width="27.83" height="30.92" onClick={() => handlebutton("3.5")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="559.49" y="480.36" width="27.49" height="30.92" onClick={() => handlebutton("3.6")} style={{cursor: 'pointer'}}/>
          </Link>
        </g>
        <g id="Lokaler">
          <Link to="/BookLokale">
            <rect className="cls-4" x="487.54" y="511.38" width="80.51" height="51.09" onClick={() => handlebutton("3.4")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="568.29" y="511.38" width="80.81" height="51.09" onClick={() => handlebutton("3.7")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="593.7" y="293.07" width="55.37" height="77.28" onClick={() => handlebutton("3.10")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="593.49" y="224.22" width="55.37" height="68.91" onClick={() => handlebutton("3.11")} style={{cursor: 'pointer'}}/>
            <rect className="cls-4" x="484.76" y="227.68" width="61.84" height="70.17" onClick={() => handlebutton("3.1")} style={{cursor: 'pointer'}}/>
          </Link>

          <text className="cls-6" transform="translate(609.1 335.54)"><tspan x="0" y="0">3.10</tspan></text>
          <text className="cls-6" transform="translate(625.38 431.22)"><tspan x="0" y="0">3.9</tspan></text>
          <text className="cls-6" transform="translate(503.39 266.59)"><tspan x="0" y="0">3.1</tspan></text>
          <text className="cls-6" transform="translate(503.47 413.41)"><tspan x="0" y="0">3.2</tspan></text>
          <text className="cls-6" transform="translate(563.37 501.36)"><tspan x="0" y="0">3.6</tspan></text>
          <text className="cls-6" transform="translate(536.11 499.58)"><tspan x="0" y="0">3.5</tspan></text>
          <text className="cls-6" transform="translate(518.18 540.76)"><tspan x="0" y="0">3.4</tspan></text>
          <text className="cls-6" transform="translate(599.37 540.76)"><tspan x="0" y="0">3.7</tspan></text>
          <text className="cls-6" transform="translate(609.94 262.51)"><tspan x="0" y="0">3.11</tspan></text>
        </g>
      </svg>
    </div>
  )
}

export default TredjeEtage