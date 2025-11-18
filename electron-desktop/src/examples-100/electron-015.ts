import { ipcRenderer } from 'electron';

export function electronExample15() {
  console.log('Electron example 15');
  
  ipcRenderer.send('example-15', { id: 15 });
  
  return {
    id: 15,
    type: 'electron-example',
  };
}
