import { ipcRenderer } from 'electron';

export function electronExample13() {
  console.log('Electron example 13');
  
  ipcRenderer.send('example-13', { id: 13 });
  
  return {
    id: 13,
    type: 'electron-example',
  };
}
