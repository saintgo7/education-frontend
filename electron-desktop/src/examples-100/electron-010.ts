import { ipcRenderer } from 'electron';

export function electronExample10() {
  console.log('Electron example 10');
  
  ipcRenderer.send('example-10', { id: 10 });
  
  return {
    id: 10,
    type: 'electron-example',
  };
}
