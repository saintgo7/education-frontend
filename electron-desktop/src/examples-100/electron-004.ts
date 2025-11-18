import { ipcRenderer } from 'electron';

export function electronExample4() {
  console.log('Electron example 4');
  
  ipcRenderer.send('example-4', { id: 4 });
  
  return {
    id: 4,
    type: 'electron-example',
  };
}
