import { ipcRenderer } from 'electron';

export function electronExample91() {
  console.log('Electron example 91');
  
  ipcRenderer.send('example-91', { id: 91 });
  
  return {
    id: 91,
    type: 'electron-example',
  };
}
