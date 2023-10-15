// import './App.css';
// import Home from './Home';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import SoneRecoreds from "./Sonerecords20231014.glb"

export default function App() {
  React.useEffect(() => {
    document
      .getElementById("my-model-viewer")
      .addEventListener("error", e =>
        console.log(`Error: ${JSON.stringify(e)}`)
      );
    document
      .getElementById("my-model-viewer")
      .addEventListener("load", e => console.log(`Load: ${JSON.stringify(e)}`));
    document
      .getElementById("my-model-viewer")
      .addEventListener("ar-status", e =>
        console.log(`AR-Status: ${JSON.stringify(e)}`)
      );
  });

  return (
    <div className="App">
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        />
      </Helmet>
      <div class="home__title">
            <div class="home__sentence">
                Sone Records ゆりのき通り店舗<br></br>3D Archive
            </div>
        </div>
      <div className="model-viewer">
        <model-viewer
          id="my-model-viewer"
          alt="astronaut"
          src={SoneRecoreds}
          auto-rotate
          camera-controls
        />
      </div>
    </div>
  );
}
