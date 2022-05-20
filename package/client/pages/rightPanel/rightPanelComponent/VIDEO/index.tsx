import React from 'react';
import '../TEXT/style.css';

interface IvideoPanelProps {
  elementId: string;
  findCurrentElement: Function;
  findCurrentElementAndChangeData: Function;
  changeConfirm: Function;
}

export default function videoPanel(props: IvideoPanelProps) {
  const { elementId, findCurrentElement, findCurrentElementAndChangeData, changeConfirm } = props;
  const elementData = findCurrentElement(elementId);
  const inputDomObject = [];
  inputDomObject[7] = false


  return (
    <div key={elementId}>
      <h2 id='title'>视频元素</h2>
      <div className="content">
        <h4>内容</h4>
        <div className="flex-row-space-between text-config-item">
          <div>视频内容:</div>
          <input
            defaultValue={elementData.data}
            ref={(element) => {
              inputDomObject[0] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>视频颜色:</div>
          <input
            defaultValue={elementData.color}
            ref={(element) => {
              inputDomObject[1] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>视频大小:</div>
          <input
            defaultValue={elementData.size}
            ref={(element) => {
              inputDomObject[2] = element;
            }}
            type="text"
          ></input>
        </div></div>
      <div className="position">
        <h4>位置</h4>
        <div className="flex-row-space-between text-config-item">
          <div>width:</div>
          <input
            defaultValue={elementData.width}
            ref={(element) => {
              inputDomObject[3] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>height:</div>
          <input
            defaultValue={elementData.height}
            ref={(element) => {
              inputDomObject[4] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>top:</div>
          <input
            defaultValue={elementData.top}
            ref={(element) => {
              inputDomObject[5] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>left:</div>
          <input
            defaultValue={elementData.left}
            ref={(element) => {
              inputDomObject[6] = element;
            }}
            type="text"
          ></input>
        </div>
        <div className="text-config-item">
          <div className="checkboxfront" >是否需要边框:</div>
          <input type="checkbox"
            onClick={(e) => {
              inputDomObject[7] = e.target.checked
              console.log(e.target.checked)
            }} className="checkbox"
          />
        </div>

      </div>
      <br />
      <button id='rightButton'
        onClick={() => {
          findCurrentElementAndChangeData(elementId, 'data', inputDomObject[0].value);
          findCurrentElementAndChangeData(elementId, 'color', inputDomObject[1].value);
          findCurrentElementAndChangeData(elementId, 'size', inputDomObject[2].value);
          findCurrentElementAndChangeData(elementId, 'width', inputDomObject[3].value);
          findCurrentElementAndChangeData(elementId, 'height', inputDomObject[4].value);
          findCurrentElementAndChangeData(elementId, 'top', inputDomObject[5].value);
          findCurrentElementAndChangeData(elementId, 'left', inputDomObject[6].value);
          findCurrentElementAndChangeData(elementId, 'isBorder', inputDomObject[7]);
          changeConfirm();

        }}
      >
        确定
      </button>
    </div>
  );
}