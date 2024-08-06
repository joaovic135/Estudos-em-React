import "./App.css";

// requitos
// desfazer clique
// REFAZER clique DESFEITO


// identificar posição de clique
// salvar posição clique
// adicionar em uma lista de 
//



// tarefas
// criar componente de ponto






//

//




import { useEffect, useState } from "react";


function App() {

  type IPoint = {
    x: number,
    y: number,
    visible: boolean
  }
  const [points, setPoints] = useState<IPoint[]>([]);
  
const onMouseClick = (e) => {
    const {clientX, clientY} = e;

    const point: IPoint = {
      x: clientX,
      y: clientY,
      visible: true
    }


    setPoints([...points, point]);
  }

  const handleClick = () => {
    if(points.length == 0) return;
    
    const p: IPoint = points.slice(0, points.length - 1);
    setPoints(p);
  }

  return (
    <div id="App" onClick={onMouseClick}>
      <button onClick={handleClick}> 
        <p>Desfazer</p>
      </button>
      {points.map((p) => p.visible ? <div style={{position: 'absolute', top: p.y, left: p.x }}>o</div> : <><div></div></> )}
      

{/*
    <button onClick={handleClick}>
      <p>Refazer</p>
    </button> */}
    </div>
  );
}

export default App;