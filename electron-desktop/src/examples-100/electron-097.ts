import { ipcRenderer } from 'electron';

export function electronExample97() {
  console.log('Electron example 97');
  
  ipcRenderer.send('example-97', { id: 97 });
  
  return {
    id: 97,
    type: 'electron-example',
  };
}
