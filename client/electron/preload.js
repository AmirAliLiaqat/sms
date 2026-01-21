import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // future native APIs go here
});