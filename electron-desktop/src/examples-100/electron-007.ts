import { ipcRenderer } from 'electron';

export function electronExample7() {
  console.log('Electron example 7');
  
  ipcRenderer.send('example-7', { id: 7 });
  
  return {
    id: 7,
    type: 'electron-example',
  };
}
