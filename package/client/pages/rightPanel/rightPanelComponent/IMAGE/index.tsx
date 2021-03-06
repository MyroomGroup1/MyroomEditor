import React from 'react';
import '../TEXT/style.css';

interface IimagePanelProps {
  elementId: string;
  findCurrentElement: Function;
  findCurrentElementAndChangeData: Function;
  changeConfirm: Function;
}

export default function imagePanel(props: IimagePanelProps) {
  const { elementId, findCurrentElement, findCurrentElementAndChangeData, changeConfirm } = props;
  const elementData = findCurrentElement(elementId);
  const inputDomObject = [];

  return (
    <div key={elementId}>
      <h2 id='title'>图片元素</h2>
      <div className="content">
        <h4>内容</h4>
        <div className="flex-row-space-between text-config-item">
          <div>图片链接:</div>
          <input
            defaultValue={elementData.data}
            ref={(element) => {
              inputDomObject[0] = element;
            }}
            type="text"
          ></input>
        </div>
      </div>
      <div className="position">
        <h4>位置</h4>
        <div className="flex-row-space-between text-config-item">
          <div>width:</div>
          <input
            defaultValue={elementData.width}
            ref={(element) => {
              inputDomObject[1] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>height:</div>
          <input
            defaultValue={elementData.height}
            ref={(element) => {
              inputDomObject[2] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>top:</div>
          <input
            defaultValue={elementData.top}
            ref={(element) => {
              inputDomObject[3] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>left:</div>
          <input
            defaultValue={elementData.left}
            ref={(element) => {
              inputDomObject[4] = element;
            }}
            type="text"
          ></input>
        </div>
      </div>
      <br />
      <button id='rightButton'
        onClick={() => {
          findCurrentElementAndChangeData(elementId, 'data', inputDomObject[0].value);
          findCurrentElementAndChangeData(elementId, 'width', inputDomObject[1].value);
          findCurrentElementAndChangeData(elementId, 'height', inputDomObject[2].value);
          findCurrentElementAndChangeData(elementId, 'top', inputDomObject[3].value);
          findCurrentElementAndChangeData(elementId, 'left', inputDomObject[4].value);
          changeConfirm();
        }}
      >
        确定
      </button>
    </div>
  );
}