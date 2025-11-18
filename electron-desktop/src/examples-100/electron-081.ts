import { ipcRenderer } from 'electron';

export function electronExample81() {
  console.log('Electron example 81');
  
  ipcRenderer.send('example-81', { id: 81 });
  
  return {
    id: 81,
    type: 'electron-example',
  };
}
