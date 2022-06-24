import type { NextApiRequest, NextApiResponse } from "next"
import Sib from 'sib-api-v3-sdk'


interface RequestData extends NextApiRequest{
  body: {
    name: 'string';
    email: 'string';
    message: 'string';
  }
}

export default function handler(req: RequestData, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body
  
  if (!body.name || !body.email || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Something is not filled' })
  }

  const client = Sib.ApiClient.instance
  const apiKey = client.authentications['api-key']
  apiKey.apiKey = process.env.SENDBLUE_API_KEY

  console.log('key ',apiKey)
  
  const tranEmailApi = new Sib.TransactionalEmailsApi()

  const sender = {
    email: 'iliamfer@hotmail.com',
    name: body.name,
  }

  const receivers = [
      {
          email: 'iliamfer@hotmail.com',
      },
  ]

  tranEmailApi
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Email do portifolio',
        textContent: `
        email do ${body.name} com o e-mail: ${body.email} e a mensagem:${body.message}
        `,
        htmlContent: `
        email do ${body.name} com o e-mail: ${body.email} e a mensagem:${body.message}
        `,
    }).then((event) => {
          console.log('Email sent')
          return res.status(200).json({ data: `${body.name}, a mensagem: ${body.message} foi enviada com sucesso!`, event })
        })
        .catch((error) => {
          console.error(error)
          return res.status(500).json({ data: `${body.name} ${body.email} ${body.message}`, error })
      })
  }