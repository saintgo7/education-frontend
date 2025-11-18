import { ipcRenderer } from 'electron';

export function electronExample22() {
  console.log('Electron example 22');
  
  ipcRenderer.send('example-22', { id: 22 });
  
  return {
    id: 22,
    type: 'electron-example',
  };
}
