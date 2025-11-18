import { ipcRenderer } from 'electron';

export function electronExample94() {
  console.log('Electron example 94');
  
  ipcRenderer.send('example-94', { id: 94 });
  
  return {
    id: 94,
    type: 'electron-example',
  };
}
