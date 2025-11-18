import { ipcRenderer } from 'electron';

export function electronExample5() {
  console.log('Electron example 5');
  
  ipcRenderer.send('example-5', { id: 5 });
  
  return {
    id: 5,
    type: 'electron-example',
  };
}
