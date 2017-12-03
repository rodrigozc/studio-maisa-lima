module.exports = {
  instagram: {
    access_token: '3424748431.d129524.c7792aae7f254f708de45d2afb7661fc' //https://www.instagram.com/rodrigozampiericastilho/
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
