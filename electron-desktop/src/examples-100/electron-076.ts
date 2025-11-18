import { ipcRenderer } from 'electron';

export function electronExample76() {
  console.log('Electron example 76');
  
  ipcRenderer.send('example-76', { id: 76 });
  
  return {
    id: 76,
    type: 'electron-example',
  };
}
