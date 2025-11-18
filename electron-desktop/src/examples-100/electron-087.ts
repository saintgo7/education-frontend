import { ipcRenderer } from 'electron';

export function electronExample87() {
  console.log('Electron example 87');
  
  ipcRenderer.send('example-87', { id: 87 });
  
  return {
    id: 87,
    type: 'electron-example',
  };
}
