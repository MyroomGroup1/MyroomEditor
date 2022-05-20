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

  const findCurrentElementAndChangeData = (id: string, key: string, changedData: any, x) => {
    for (let item of data) {
      if (item.id === id) {
        item[key] = changedData;
      }
    }
    setDrawPanelData([...data]);
  };
  const changeConfirm = () => {
    console.log(data)
  };

  const generateRightPanel = () => {
    if (type === RIGHT_PANEL_TYPE.NONE) {
      return <h1 className='notChoose'>未选中元素</h1>;
    } else if (type === RIGHT_PANEL_TYPE.TEXT) {
      return (
        <TextPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData} changeConfirm={changeConfirm}></TextPanel>
      )
    } else if (type === RIGHT_PANEL_TYPE.IMAGE) {
      return (
        <ImagePanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData} changeConfirm={changeConfirm}></ImagePanel>
      )
    } else if (type === RIGHT_PANEL_TYPE.VIDEO) {
      return (
        <VideoPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData} changeConfirm={changeConfirm}></VideoPanel>
      )
    } else if (type === RIGHT_PANEL_TYPE.CARD) {
      return (
        <CardPanel elementId={elementId} findCurrentElement={findCurrentElement} findCurrentElementAndChangeData={findCurrentElementAndChangeData} changeConfirm={changeConfirm}></CardPanel>
      )
    }


  };

  return (<div className="right-panel">{generateRightPanel()}</div>);
}
