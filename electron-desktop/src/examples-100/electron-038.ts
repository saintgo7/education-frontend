import { ipcRenderer } from 'electron';

export function electronExample38() {
  console.log('Electron example 38');
  
  ipcRenderer.send('example-38', { id: 38 });
  
  return {
    id: 38,
    type: 'electron-example',
  };
}
