import { ipcRenderer } from 'electron';

export function electronExample28() {
  console.log('Electron example 28');
  
  ipcRenderer.send('example-28', { id: 28 });
  
  return {
    id: 28,
    type: 'electron-example',
  };
}
