import { ipcRenderer } from 'electron';

export function electronExample34() {
  console.log('Electron example 34');
  
  ipcRenderer.send('example-34', { id: 34 });
  
  return {
    id: 34,
    type: 'electron-example',
  };
}
