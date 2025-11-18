import { ipcRenderer } from 'electron';

export function electronExample32() {
  console.log('Electron example 32');
  
  ipcRenderer.send('example-32', { id: 32 });
  
  return {
    id: 32,
    type: 'electron-example',
  };
}
