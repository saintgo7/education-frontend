import { ipcRenderer } from 'electron';

export function electronExample56() {
  console.log('Electron example 56');
  
  ipcRenderer.send('example-56', { id: 56 });
  
  return {
    id: 56,
    type: 'electron-example',
  };
}
