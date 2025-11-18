import { ipcRenderer } from 'electron';

export function electronExample21() {
  console.log('Electron example 21');
  
  ipcRenderer.send('example-21', { id: 21 });
  
  return {
    id: 21,
    type: 'electron-example',
  };
}
