import { ipcRenderer } from 'electron';

export function electronExample26() {
  console.log('Electron example 26');
  
  ipcRenderer.send('example-26', { id: 26 });
  
  return {
    id: 26,
    type: 'electron-example',
  };
}
