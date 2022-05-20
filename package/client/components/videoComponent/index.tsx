import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import '../cardComponent/style.css'

export default function VideoComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.VIDEO
  }));

  return (
    <div className="card-component" ref={drag}>
      视频组件
    </div>
  );
}
