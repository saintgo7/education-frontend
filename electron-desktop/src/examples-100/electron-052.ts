import { ipcRenderer } from 'electron';

export function electronExample52() {
  console.log('Electron example 52');
  
  ipcRenderer.send('example-52', { id: 52 });
  
  return {
    id: 52,
    type: 'electron-example',
  };
}
