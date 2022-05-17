import React from 'react';
import { RIGHT_PANEL_TYPE } from '../../constants';
import './style.css';
import TextPanel from './rightPanelComponent/TEXT'
import ImagePanel from './rightPanelComponent/IMAGE'
import VideoPanel from './rightPanelComponent/VIDEO'
import CardPanel from './rightPanelComponent/CARD'

interface IRigthPanelProps {
  type: RIGHT_PANEL_TYPE;
  data: any;
  elementId: string;
  setDrawPanelData: Function;
}

export default function RightPanel(props: IRigthPanelProps) {
  const { type, data, elementId, setDrawPanelData } = props;

  const findCurrentElement = (id: string) => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
    }
    return undefined;
  };

  const findCurrentElementAndChangeData = (id: string, key: string, changedData: any) => {
    for (let item of data) {
      if (item.id === id) {
        item[key] = changedData;
      }
    }
    setDrawPanelData([...data]);
  };

  const generateRightPanel = () => {
    if (type === RIGHT_PANEL_TYPE.NONE) {
      return <div>未选中元素</div>;
    } else if (type === RIGHT_PANEL_TYPE.TEXT) {
      return (
       <TextPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData}></TextPanel>
     )
    }else if(type === RIGHT_PANEL_TYPE.IMAGE){
      return (
        <ImagePanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData}></ImagePanel>
      )
    }else if(type === RIGHT_PANEL_TYPE.VIDEO){
      return (
        <VideoPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData}></VideoPanel>
      )

    }else if(type === RIGHT_PANEL_TYPE.CARD){
      return (
        <CardPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData}></CardPanel>
      )
    }
    

  };

  return <div className="right-panel">{generateRightPanel()}</div>;
}
