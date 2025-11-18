import { ipcRenderer } from 'electron';

export function electronExample67() {
  console.log('Electron example 67');
  
  ipcRenderer.send('example-67', { id: 67 });
  
  return {
    id: 67,
    type: 'electron-example',
  };
}
