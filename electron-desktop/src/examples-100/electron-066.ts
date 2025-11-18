import { ipcRenderer } from 'electron';

export function electronExample66() {
  console.log('Electron example 66');
  
  ipcRenderer.send('example-66', { id: 66 });
  
  return {
    id: 66,
    type: 'electron-example',
  };
}
