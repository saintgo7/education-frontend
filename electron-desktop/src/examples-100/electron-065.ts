import { ipcRenderer } from 'electron';

export function electronExample65() {
  console.log('Electron example 65');
  
  ipcRenderer.send('example-65', { id: 65 });
  
  return {
    id: 65,
    type: 'electron-example',
  };
}
