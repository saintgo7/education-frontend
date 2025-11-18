import { ipcRenderer } from 'electron';

export function electronExample1() {
  console.log('Electron example 1');
  
  ipcRenderer.send('example-1', { id: 1 });
  
  return {
    id: 1,
    type: 'electron-example',
  };
}
