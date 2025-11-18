import { ipcRenderer } from 'electron';

export function electronExample85() {
  console.log('Electron example 85');
  
  ipcRenderer.send('example-85', { id: 85 });
  
  return {
    id: 85,
    type: 'electron-example',
  };
}
