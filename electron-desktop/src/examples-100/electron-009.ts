import { ipcRenderer } from 'electron';

export function electronExample9() {
  console.log('Electron example 9');
  
  ipcRenderer.send('example-9', { id: 9 });
  
  return {
    id: 9,
    type: 'electron-example',
  };
}
