import { ipcRenderer } from 'electron';

export function electronExample3() {
  console.log('Electron example 3');
  
  ipcRenderer.send('example-3', { id: 3 });
  
  return {
    id: 3,
    type: 'electron-example',
  };
}
