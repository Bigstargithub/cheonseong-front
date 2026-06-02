// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "cheonseong-front",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "cluster",
      max_memory_restart: "500M",
      min_uptime: "10s",
      max_restarts: 10,
      // 추가: 크래시 시 재시작 딜레이
      restart_delay: 4000,
      env: {
        NODE_ENV: "production",
        PORT: Number(process.env.PORT ?? 3000),
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
    },
  ],
};
