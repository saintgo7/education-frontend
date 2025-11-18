import { ipcRenderer } from 'electron';

export function electronExample43() {
  console.log('Electron example 43');
  
  ipcRenderer.send('example-43', { id: 43 });
  
  return {
    id: 43,
    type: 'electron-example',
  };
}
