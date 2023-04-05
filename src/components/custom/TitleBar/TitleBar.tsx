import './TitleBar.css';
import maximize from './../../../assets/icons/maximize.svg';
import minimize from './../../../assets/icons/minimize.svg';
import restore from './../../../assets/icons/restore.svg';
import close from './../../../assets/icons/close.svg';
import { ipcRenderer } from "../../../utils/appRuntime";
import { useState } from 'react';

export const TitleBar = () => {

  const [isRestore, setIsRestore] = useState<boolean>(false);

  const handleClose = () => {
    ipcRenderer.send('closeApp');
  }

  const handleMax = () => {
    ipcRenderer.send('maximizeApp');
    setIsRestore(!isRestore);
  }

  const handleMin = () => {
    ipcRenderer.send('minimizeApp');
  }

  const handleRestore = () => {
    ipcRenderer.send('restoreApp');
    setIsRestore(!isRestore);
  }

  return (
    <header className="titlebar">
      <div className="drag-region">
        <div className="window-title">
          <span>Project Discord</span>
        </div>
        <div className="window-controls">
          <div className="button" id="min-button" onClick={() => handleMin()}>
            <img src={minimize} />
          </div>
          {!isRestore ? <div className="button" id="max-button" onClick={() => handleMax()}>
            <img src={maximize} />
          </div> : <div className="button" id="restore-button" onClick={() => handleRestore()}>
            <img src={restore} />
          </div>}
          <div className="button" id="close-button" onClick={() => handleClose()}>
            <img src={close} />
          </div>
        </div>
      </div>
    </header>
  )
}
