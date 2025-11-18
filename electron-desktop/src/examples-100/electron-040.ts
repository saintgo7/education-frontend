import { ipcRenderer } from 'electron';

export function electronExample40() {
  console.log('Electron example 40');
  
  ipcRenderer.send('example-40', { id: 40 });
  
  return {
    id: 40,
    type: 'electron-example',
  };
}
