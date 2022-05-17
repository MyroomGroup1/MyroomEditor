import React from 'react';
import './style.css';

interface IvideoPanelProps{
  elementId:string;
  findCurrentElement:Function;
  findCurrentElementAndChangeData:Function;
}

export default function videoPanel(props:IvideoPanelProps){
  const {elementId,findCurrentElement,findCurrentElementAndChangeData} = props;
  const elementData = findCurrentElement(elementId);
  const inputDomObject = [];

      return (
        <div key={elementId}>
          <div>视频元素</div>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>文字内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
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
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(elementId, 'data', inputDomObject[0].value);
              findCurrentElementAndChangeData(elementId, 'color', inputDomObject[1].value);
              findCurrentElementAndChangeData(elementId, 'size', inputDomObject[2].value);
              findCurrentElementAndChangeData(elementId, 'width', inputDomObject[3].value);
              findCurrentElementAndChangeData(elementId, 'height', inputDomObject[4].value);
              findCurrentElementAndChangeData(elementId, 'top', inputDomObject[5].value);
              findCurrentElementAndChangeData(elementId, 'left', inputDomObject[6].value);
            }}
          >
            确定
          </button>
        </div>
      );
}