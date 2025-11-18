import { ipcRenderer } from 'electron';

export function electronExample83() {
  console.log('Electron example 83');
  
  ipcRenderer.send('example-83', { id: 83 });
  
  return {
    id: 83,
    type: 'electron-example',
  };
}
