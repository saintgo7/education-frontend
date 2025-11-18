import { ipcRenderer } from 'electron';

export function electronExample64() {
  console.log('Electron example 64');
  
  ipcRenderer.send('example-64', { id: 64 });
  
  return {
    id: 64,
    type: 'electron-example',
  };
}
