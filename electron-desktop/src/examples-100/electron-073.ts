import { ipcRenderer } from 'electron';

export function electronExample73() {
  console.log('Electron example 73');
  
  ipcRenderer.send('example-73', { id: 73 });
  
  return {
    id: 73,
    type: 'electron-example',
  };
}
