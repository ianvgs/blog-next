module.exports = {
  apps: [{
    script: 'npm start'
  }],
  deploy: {
    production: {
      key: 'aws.pem',
      user: 'ubuntu',
      host: '3.145.49.67',
      ref: 'origin/main',
      repo: 'https://github.com/ianvgs/blog-next.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
