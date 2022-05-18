import axios from 'axios';
import React from 'react';
import TextComponent from '../../components/textComponent';
import ImgComponent from '../../components/imgComponent';
import VideoComponent from '../../components/videoComponent';
import CardComponent from '../../components/cardComponent';
import './style.css';

interface ILeftPanelProps {
  data: any;
}

export default function LeftPanel(props: ILeftPanelProps) {
  const { data } = props;

  return (
    <div className="left-panel">
      <div className="component-list">
        <TextComponent></TextComponent>
        <ImgComponent></ImgComponent>
        <VideoComponent></VideoComponent>
        <CardComponent></CardComponent>
      </div>
      <button
        className="save-button"
        onClick={() => {
          console.log('save:', data);
          axios
            .post('/api/save', { drawPanelData: data })
            .then((res) => {
              console.log('res:', res);
            })
            .catch((err) => {
              console.log('err:', err);
            });
        }}
      >
        保存到后台
      </button>
    </div>
  );
}
