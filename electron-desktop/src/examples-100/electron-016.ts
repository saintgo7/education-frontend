import { ipcRenderer } from 'electron';

export function electronExample16() {
  console.log('Electron example 16');
  
  ipcRenderer.send('example-16', { id: 16 });
  
  return {
    id: 16,
    type: 'electron-example',
  };
}
