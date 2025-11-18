import { ipcRenderer } from 'electron';

export function electronExample6() {
  console.log('Electron example 6');
  
  ipcRenderer.send('example-6', { id: 6 });
  
  return {
    id: 6,
    type: 'electron-example',
  };
}
