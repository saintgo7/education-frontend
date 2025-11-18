import { ipcRenderer } from 'electron';

export function electronExample77() {
  console.log('Electron example 77');
  
  ipcRenderer.send('example-77', { id: 77 });
  
  return {
    id: 77,
    type: 'electron-example',
  };
}
