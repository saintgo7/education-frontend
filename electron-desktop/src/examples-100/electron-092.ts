import { ipcRenderer } from 'electron';

export function electronExample92() {
  console.log('Electron example 92');
  
  ipcRenderer.send('example-92', { id: 92 });
  
  return {
    id: 92,
    type: 'electron-example',
  };
}
