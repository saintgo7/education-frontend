import { ipcRenderer } from 'electron';

export function electronExample30() {
  console.log('Electron example 30');
  
  ipcRenderer.send('example-30', { id: 30 });
  
  return {
    id: 30,
    type: 'electron-example',
  };
}
