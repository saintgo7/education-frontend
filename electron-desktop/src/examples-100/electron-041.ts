import { ipcRenderer } from 'electron';

export function electronExample41() {
  console.log('Electron example 41');
  
  ipcRenderer.send('example-41', { id: 41 });
  
  return {
    id: 41,
    type: 'electron-example',
  };
}
