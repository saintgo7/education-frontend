import { ipcRenderer } from 'electron';

export function electronExample2() {
  console.log('Electron example 2');
  
  ipcRenderer.send('example-2', { id: 2 });
  
  return {
    id: 2,
    type: 'electron-example',
  };
}
