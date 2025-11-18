import { ipcRenderer } from 'electron';

export function electronExample96() {
  console.log('Electron example 96');
  
  ipcRenderer.send('example-96', { id: 96 });
  
  return {
    id: 96,
    type: 'electron-example',
  };
}
