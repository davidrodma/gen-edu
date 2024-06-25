module.exports = {
  apps: [
    {
      name: 'Next-Client',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3101, // Porta em que sua aplicação Next.js estará rodando
      },
    },
  ],
}
