import { ipcRenderer } from 'electron';

export function electronExample45() {
  console.log('Electron example 45');
  
  ipcRenderer.send('example-45', { id: 45 });
  
  return {
    id: 45,
    type: 'electron-example',
  };
}
