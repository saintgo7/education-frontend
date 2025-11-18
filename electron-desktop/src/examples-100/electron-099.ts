import { ipcRenderer } from 'electron';

export function electronExample99() {
  console.log('Electron example 99');
  
  ipcRenderer.send('example-99', { id: 99 });
  
  return {
    id: 99,
    type: 'electron-example',
  };
}
