import { ipcRenderer } from 'electron';

export function electronExample98() {
  console.log('Electron example 98');
  
  ipcRenderer.send('example-98', { id: 98 });
  
  return {
    id: 98,
    type: 'electron-example',
  };
}
