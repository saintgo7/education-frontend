import { ipcRenderer } from 'electron';

export function electronExample23() {
  console.log('Electron example 23');
  
  ipcRenderer.send('example-23', { id: 23 });
  
  return {
    id: 23,
    type: 'electron-example',
  };
}
