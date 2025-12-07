import React, { useState } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';
import { HandController } from './components/HandController';
import { TreeState } from './types';

function App() {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  return (
    <div className="relative w-full h-full bg-arix-dark overflow-hidden">
      <Scene currentState={treeState} />
      <Overlay currentState={treeState} setTreeState={setTreeState} />
      <HandController setTreeState={setTreeState} />
      
      {/* Loading/Init Overlay (Could be expanded, keeping simple for this structure) */}
      <div className="absolute inset-0 bg-black pointer-events-none animate-[fadeOut_2s_ease-in_forwards] z-50 opacity-0" />
    </div>
  );
}

export default App;