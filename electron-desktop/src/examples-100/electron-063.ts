import { ipcRenderer } from 'electron';

export function electronExample63() {
  console.log('Electron example 63');
  
  ipcRenderer.send('example-63', { id: 63 });
  
  return {
    id: 63,
    type: 'electron-example',
  };
}
