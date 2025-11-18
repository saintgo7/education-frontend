import { ipcRenderer } from 'electron';

export function electronExample93() {
  console.log('Electron example 93');
  
  ipcRenderer.send('example-93', { id: 93 });
  
  return {
    id: 93,
    type: 'electron-example',
  };
}
