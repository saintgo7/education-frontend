import { ipcRenderer } from 'electron';

export function electronExample27() {
  console.log('Electron example 27');
  
  ipcRenderer.send('example-27', { id: 27 });
  
  return {
    id: 27,
    type: 'electron-example',
  };
}
