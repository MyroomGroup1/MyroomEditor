import React from 'react';
import { useDrop } from 'react-dnd';
import { COMPONENT_TYPE, RIGHT_PANEL_TYPE } from '../../constants';
import './style.css';

interface IDrawPanelProps {
  data: any;
  setData: Function;
  setRightPanelType: Function;
  setRightPanelElementId: Function;
}

export default function DrawPanel(props: IDrawPanelProps) {
  const { data, setRightPanelType, setRightPanelElementId, setData } = props;

  const [, drop] = useDrop(() => ({
    accept: [COMPONENT_TYPE.TEXT,COMPONENT_TYPE.IMAGE,COMPONENT_TYPE.VIDEO,COMPONENT_TYPE.CARD],
    drop: (item, monitor) => {
      const { x, y } = monitor.getClientOffset();
      const currentX = x - 310;
      const currentY = y - 20;
      const type = monitor.getItemType()

      setData([
        ...data,
        {
          id: `${type}-${data.length + 1}`,
          type: `${type}`,
          data: `我是新建的${type}`,
          color: '#000000',
          size: '12px',
          width: '100px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`
        }
      ]);
    }
  }));

  const generateContent = () => {
    const output = [];
    for (const item of data) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(RIGHT_PANEL_TYPE.TEXT);
              setRightPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}
          </div>
        );
      }else if(item.type === COMPONENT_TYPE.IMAGE){
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(RIGHT_PANEL_TYPE.IMAGE);
              setRightPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}
          </div>
        );

      }else if(item.type === COMPONENT_TYPE.VIDEO){
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(RIGHT_PANEL_TYPE.VIDEO);
              setRightPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}
          </div>
        );

      }else if (item.type === COMPONENT_TYPE.CARD){
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(RIGHT_PANEL_TYPE.CARD);
              setRightPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}
          </div>
        );
      }
    }

    return output;
  };

  return (
    <div className="draw-panel" ref={drop}>
      {generateContent()}
    </div>
  );
}
