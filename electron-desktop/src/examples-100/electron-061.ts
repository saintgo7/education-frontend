import { ipcRenderer } from 'electron';

export function electronExample61() {
  console.log('Electron example 61');
  
  ipcRenderer.send('example-61', { id: 61 });
  
  return {
    id: 61,
    type: 'electron-example',
  };
}
