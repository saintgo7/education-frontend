import { ipcRenderer } from 'electron';

export function electronExample20() {
  console.log('Electron example 20');
  
  ipcRenderer.send('example-20', { id: 20 });
  
  return {
    id: 20,
    type: 'electron-example',
  };
}
