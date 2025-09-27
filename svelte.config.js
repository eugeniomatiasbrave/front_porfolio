import vercelAdapter from '@sveltejs/adapter-vercel';
import nodeAdapter from '@sveltejs/adapter-node';

// Seleccionar adaptador basado en variable de entorno
const adapter = process.env.ADAPTER === 'node' 
	? nodeAdapter({
		out: 'build',
		precompress: false
	})
	: vercelAdapter();

const config = { 
	kit: {
		adapter: adapter,
		files: {
            assets: 'static'
        }
	}
};

export default config;
