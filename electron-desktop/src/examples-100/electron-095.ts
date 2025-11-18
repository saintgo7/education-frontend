import { ipcRenderer } from 'electron';

export function electronExample95() {
  console.log('Electron example 95');
  
  ipcRenderer.send('example-95', { id: 95 });
  
  return {
    id: 95,
    type: 'electron-example',
  };
}
