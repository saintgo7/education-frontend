import { ipcRenderer } from 'electron';

export function electronExample57() {
  console.log('Electron example 57');
  
  ipcRenderer.send('example-57', { id: 57 });
  
  return {
    id: 57,
    type: 'electron-example',
  };
}
