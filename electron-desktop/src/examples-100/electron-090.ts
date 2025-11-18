import { ipcRenderer } from 'electron';

export function electronExample90() {
  console.log('Electron example 90');
  
  ipcRenderer.send('example-90', { id: 90 });
  
  return {
    id: 90,
    type: 'electron-example',
  };
}
