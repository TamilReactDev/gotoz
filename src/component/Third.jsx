import React, { useEffect, useRef, useState } from 'react';
// import tile1 from './images/tiles/tile1.png';
// import tile2 from './images/tiles/tile2.png';
// import tile3 from './images/tiles/tile3.png';
// import tile4 from './images/tiles/tile4.png';
// import tile1obj from './images/3dobj/tile1obj.glb';
// import tile2obj from './images/3dobj/tile2obj.glb';
// import tile3obj from './images/3dobj/tile3obj.glb';
// import tile4obj from './images/3dobj/tile4obj.glb';

const Third = () => {



  const models = ["plain1Tile.glb", "plain1Tile.glb"]; // Array of 3D models
  const [currentModelIndex, setCurrentModelIndex] = useState(0); // Index of the currently displayed model
  const modelViewer = useRef(null);
  const selectMode = useRef(null);
  const color = useRef(null);


 

  const animeArr = [
    {
      id: 1,
      img: "plain1Tile.glb",
    },
    {
      id: 2,
      img: "plain1Tile.glb",
    },
   
  ];

  const selectModel = (id) => {
    setCurrentModelIndex(id - 1); // Arrays are zero-indexed, so adjust for the id
  };

  useEffect(() => {

   

    // opacity.addEventListener('input', (e) => blendEffect.opacity = e.target.value);
    selectMode.current.addEventListener('change', (e) => {
      color.current.blendMode = e.target.value;
      console.log(e.target.value)
    });
    

  }, []);

  return (
    <div className="third-one-container">
      <div>
        <div className="third-one-left">
          {/* <model-viewer
          style={{ width: "400px", height: "400px" }}
          alt="Model Viewer"
          src={models[currentModelIndex]}
          ar ar-placement='floor'
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        >
        </model-viewer> */}



          <model-viewer ref={modelViewer} id="blendViewer" camera-controls touch-action="pan-y" ar src={models[currentModelIndex]} alt="A 3D model of an astronaut">
            <effect-composer render-mode="quality" msaa="8">
              <color-grade-effect ref={color} contrast="0.5" saturation="-1" opacity="1" blend-mode="default"></color-grade-effect>
            </effect-composer>
            <div class="controls">
              <label for="opacity">Opacity</label>
              <input id="opacity" type="range" min="0" max="1" step="0.01" value="1" />
              <label for="blend-mode">Blend Mode:</label>
              <select id="blend-mode" ref={selectMode}>
                <option value="default">Default</option>
                <option value="skip">Skip</option>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="divide">Divide</option>
                <option value="negation">Negation</option>
              </select>
            </div>
          </model-viewer>
        </div>
        <div className="anime-pic" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {animeArr.map((item) => (
            <img key={item.id} src={item.img} alt={`Tile ${item.id}`} onClick={() => selectModel(item.id)} style={{ cursor: "pointer", margin: "5px" }} />
          ))}
        </div>
      </div>
      <div className="third-one-right">
        <h1>Elevate your Business With our Digital Transformation Solutions</h1>
        <p>Accelerate your Business</p>
        <div>
          <button>Read More</button>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Third;
