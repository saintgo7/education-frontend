import { ipcRenderer } from 'electron';

export function electronExample86() {
  console.log('Electron example 86');
  
  ipcRenderer.send('example-86', { id: 86 });
  
  return {
    id: 86,
    type: 'electron-example',
  };
}
