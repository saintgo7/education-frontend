import { ipcRenderer } from 'electron';

export function electronExample78() {
  console.log('Electron example 78');
  
  ipcRenderer.send('example-78', { id: 78 });
  
  return {
    id: 78,
    type: 'electron-example',
  };
}
