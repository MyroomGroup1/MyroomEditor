import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import '../cardComponent/style.css'

export default function TextComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.IMAGE
  }));

  return (
    <div className="card-component" ref={drag}>
      图片组件
    </div>
  );
}
