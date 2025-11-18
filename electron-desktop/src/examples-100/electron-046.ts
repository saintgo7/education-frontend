import { ipcRenderer } from 'electron';

export function electronExample46() {
  console.log('Electron example 46');
  
  ipcRenderer.send('example-46', { id: 46 });
  
  return {
    id: 46,
    type: 'electron-example',
  };
}
