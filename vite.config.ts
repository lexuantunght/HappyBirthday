import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        outDir: path.resolve(__dirname, 'build'),
        emptyOutDir: true,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: (assetInfo) => {
                    let extType = 'assets';
                    if (assetInfo.name && /\.(css)$/.test(assetInfo.name)) {
                        extType = 'css';
                    } else if (assetInfo.name && /\.(js)$/.test(assetInfo.name)) {
                        extType = 'vendors';
                    }
                    return `${extType}/[name].[hash][extname]`;
                },
            },
        },
        copyPublicDir: true,
    },
    publicDir: path.resolve(__dirname, 'public'),
    esbuild: {
        legalComments: 'none',
    },
});
