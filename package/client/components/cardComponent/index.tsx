import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

export default function CardComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.CARD
  }));

  return (
    <div className="card-component" ref={drag}>
      卡片组件
    </div>
  );
}
