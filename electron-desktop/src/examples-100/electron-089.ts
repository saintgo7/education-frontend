import { ipcRenderer } from 'electron';

export function electronExample89() {
  console.log('Electron example 89');
  
  ipcRenderer.send('example-89', { id: 89 });
  
  return {
    id: 89,
    type: 'electron-example',
  };
}
