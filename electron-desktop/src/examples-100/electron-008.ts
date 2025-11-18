import { ipcRenderer } from 'electron';

export function electronExample8() {
  console.log('Electron example 8');
  
  ipcRenderer.send('example-8', { id: 8 });
  
  return {
    id: 8,
    type: 'electron-example',
  };
}
