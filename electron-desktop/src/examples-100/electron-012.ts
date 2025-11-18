import { ipcRenderer } from 'electron';

export function electronExample12() {
  console.log('Electron example 12');
  
  ipcRenderer.send('example-12', { id: 12 });
  
  return {
    id: 12,
    type: 'electron-example',
  };
}
