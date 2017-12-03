module.exports = {
  instagram: {
    access_token: '5508561153.02e4981.a824607156914aa1aeefa61f336a3c25' //https://www.instagram.com/studiomaisalima/
  },
  mail: {
    smtp: {
      host: 'smtp.office365.com',
      port: 587,
      auth: {
        user: 'contato@studiomaisalima.com',
        pass: 'Denied01!'
      },
      secureConnection: false,
      tls: {
        ciphers: 'SSLv3'
      }
    },
    options: {
      from: '"Contato - Studio Maísa Lima" <contato@studiomaisalima.com>',
      to: '"Contato - Studio Maísa Lima" <contato@studiomaisalima.com>',
      subject: '[Contato] - Studio Maísa Lima'
    }
  }
};
