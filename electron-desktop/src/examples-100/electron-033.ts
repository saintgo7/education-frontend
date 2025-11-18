import { ipcRenderer } from 'electron';

export function electronExample33() {
  console.log('Electron example 33');
  
  ipcRenderer.send('example-33', { id: 33 });
  
  return {
    id: 33,
    type: 'electron-example',
  };
}
