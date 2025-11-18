import { ipcRenderer } from 'electron';

export function electronExample44() {
  console.log('Electron example 44');
  
  ipcRenderer.send('example-44', { id: 44 });
  
  return {
    id: 44,
    type: 'electron-example',
  };
}
