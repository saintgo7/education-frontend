import { ipcRenderer } from 'electron';

export function electronExample88() {
  console.log('Electron example 88');
  
  ipcRenderer.send('example-88', { id: 88 });
  
  return {
    id: 88,
    type: 'electron-example',
  };
}
