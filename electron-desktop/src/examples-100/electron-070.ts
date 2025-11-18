import { ipcRenderer } from 'electron';

export function electronExample70() {
  console.log('Electron example 70');
  
  ipcRenderer.send('example-70', { id: 70 });
  
  return {
    id: 70,
    type: 'electron-example',
  };
}
