import { ipcRenderer } from 'electron';

export function electronExample50() {
  console.log('Electron example 50');
  
  ipcRenderer.send('example-50', { id: 50 });
  
  return {
    id: 50,
    type: 'electron-example',
  };
}
