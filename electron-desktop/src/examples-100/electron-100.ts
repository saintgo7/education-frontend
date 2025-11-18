import { ipcRenderer } from 'electron';

export function electronExample100() {
  console.log('Electron example 100');
  
  ipcRenderer.send('example-100', { id: 100 });
  
  return {
    id: 100,
    type: 'electron-example',
  };
}
