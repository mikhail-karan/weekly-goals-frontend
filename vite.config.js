import vue from '@vitejs/plugin-vue'
import pluginEnv from 'vite-plugin-vue-env';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),
    pluginEnv()
  ]
}
