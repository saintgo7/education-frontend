import { ipcRenderer } from 'electron';

export function electronExample24() {
  console.log('Electron example 24');
  
  ipcRenderer.send('example-24', { id: 24 });
  
  return {
    id: 24,
    type: 'electron-example',
  };
}
