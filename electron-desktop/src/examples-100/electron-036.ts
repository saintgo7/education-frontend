import { ipcRenderer } from 'electron';

export function electronExample36() {
  console.log('Electron example 36');
  
  ipcRenderer.send('example-36', { id: 36 });
  
  return {
    id: 36,
    type: 'electron-example',
  };
}
