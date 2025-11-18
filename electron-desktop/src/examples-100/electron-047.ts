import { ipcRenderer } from 'electron';

export function electronExample47() {
  console.log('Electron example 47');
  
  ipcRenderer.send('example-47', { id: 47 });
  
  return {
    id: 47,
    type: 'electron-example',
  };
}
