import { ipcRenderer } from 'electron';

export function electronExample19() {
  console.log('Electron example 19');
  
  ipcRenderer.send('example-19', { id: 19 });
  
  return {
    id: 19,
    type: 'electron-example',
  };
}
