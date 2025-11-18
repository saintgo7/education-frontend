import { ipcRenderer } from 'electron';

export function electronExample62() {
  console.log('Electron example 62');
  
  ipcRenderer.send('example-62', { id: 62 });
  
  return {
    id: 62,
    type: 'electron-example',
  };
}
