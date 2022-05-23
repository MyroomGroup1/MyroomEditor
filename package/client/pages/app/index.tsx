import React, { useState } from 'react';
import './style.css';
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RIGHT_PANEL_TYPE } from '../../constants';

const MOCK_DRAW_DATA = [
  {
    id: `text-1`,
    type: `text`,
    data: `我是新建的text`,
    color: '#000000',
    size: '12px',
    width: '200px',
    height: '150px',
    left: `100px`,
    top: `100px`,
    isBorder: true
  },
  {
    id: `image-1`,
    type: 'image',
    data: `https://img2.baidu.com/it/u=2831627057,1326496858&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260`,
    width: '200px',
    height: '150px',
    left: `550px`,
    top: `100px`,
    isBorder: false
  }
];

export default function App() {
  const [drawPanelData, setDrawPanelData] = useState([...MOCK_DRAW_DATA]);
  const [rightPanelType, setRightPanelType] = useState(RIGHT_PANEL_TYPE.NONE);
  const [rightPanelElementId, setRightPanelElementId] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-row-space-between app">
        <LeftPanel data={drawPanelData}></LeftPanel>
        <DrawPanel
          key={`${Math.floor(Math.random() * 1000)}-${drawPanelData.length}`}
          data={drawPanelData}
          setData={setDrawPanelData}
          setRightPanelType={setRightPanelType}
          setRightPanelElementId={setRightPanelElementId}
        ></DrawPanel>
        <RightPanel
          type={rightPanelType}
          data={drawPanelData}
          elementId={rightPanelElementId}
          setDrawPanelData={setDrawPanelData}
        ></RightPanel>
      </div>
    </DndProvider>
  );
}
