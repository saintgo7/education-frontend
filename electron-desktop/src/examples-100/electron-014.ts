import { ipcRenderer } from 'electron';

export function electronExample14() {
  console.log('Electron example 14');
  
  ipcRenderer.send('example-14', { id: 14 });
  
  return {
    id: 14,
    type: 'electron-example',
  };
}
