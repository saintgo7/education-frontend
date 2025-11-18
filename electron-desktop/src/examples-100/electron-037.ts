import { ipcRenderer } from 'electron';

export function electronExample37() {
  console.log('Electron example 37');
  
  ipcRenderer.send('example-37', { id: 37 });
  
  return {
    id: 37,
    type: 'electron-example',
  };
}
