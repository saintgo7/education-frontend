import { ipcRenderer } from 'electron';

export function electronExample80() {
  console.log('Electron example 80');
  
  ipcRenderer.send('example-80', { id: 80 });
  
  return {
    id: 80,
    type: 'electron-example',
  };
}
