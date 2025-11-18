import { ipcRenderer } from 'electron';

export function electronExample31() {
  console.log('Electron example 31');
  
  ipcRenderer.send('example-31', { id: 31 });
  
  return {
    id: 31,
    type: 'electron-example',
  };
}
