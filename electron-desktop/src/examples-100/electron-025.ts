import { ipcRenderer } from 'electron';

export function electronExample25() {
  console.log('Electron example 25');
  
  ipcRenderer.send('example-25', { id: 25 });
  
  return {
    id: 25,
    type: 'electron-example',
  };
}
