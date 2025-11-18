import { ipcRenderer } from 'electron';

export function electronExample18() {
  console.log('Electron example 18');
  
  ipcRenderer.send('example-18', { id: 18 });
  
  return {
    id: 18,
    type: 'electron-example',
  };
}
