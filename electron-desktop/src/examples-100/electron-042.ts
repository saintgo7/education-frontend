import { ipcRenderer } from 'electron';

export function electronExample42() {
  console.log('Electron example 42');
  
  ipcRenderer.send('example-42', { id: 42 });
  
  return {
    id: 42,
    type: 'electron-example',
  };
}
