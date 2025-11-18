import { ipcRenderer } from 'electron';

export function electronExample11() {
  console.log('Electron example 11');
  
  ipcRenderer.send('example-11', { id: 11 });
  
  return {
    id: 11,
    type: 'electron-example',
  };
}
