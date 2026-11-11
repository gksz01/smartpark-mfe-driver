import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({base:process.env.VITE_BASE_PATH || "/",plugins:[react(),federation({name:'smartpark_mfe_driver',filename: 'remoteEntry.js', exposes: {'./App':'./src/App.tsx'}, shared:['react','react-dom']})],build:{target:'esnext',cssCodeSplit:true},preview:{port:4174,cors:true,host:'0.0.0.0'},server:{port:4174,cors:true,host:'0.0.0.0'}});
