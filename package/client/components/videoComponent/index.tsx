import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

export default function VideoComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.VIDEO
  }));

  return (
    <div className="video-component" ref={drag}>
      视频组件
    </div>
  );
}
