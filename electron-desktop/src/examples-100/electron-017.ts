import { ipcRenderer } from 'electron';

export function electronExample17() {
  console.log('Electron example 17');
  
  ipcRenderer.send('example-17', { id: 17 });
  
  return {
    id: 17,
    type: 'electron-example',
  };
}
