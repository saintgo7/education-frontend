import { ipcRenderer } from 'electron';

export function electronExample51() {
  console.log('Electron example 51');
  
  ipcRenderer.send('example-51', { id: 51 });
  
  return {
    id: 51,
    type: 'electron-example',
  };
}
