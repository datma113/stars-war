import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//@ts-ignore
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            //@ts-ignore
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [react()],
});
