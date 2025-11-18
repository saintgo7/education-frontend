import { ipcRenderer } from 'electron';

export function electronExample60() {
  console.log('Electron example 60');
  
  ipcRenderer.send('example-60', { id: 60 });
  
  return {
    id: 60,
    type: 'electron-example',
  };
}
