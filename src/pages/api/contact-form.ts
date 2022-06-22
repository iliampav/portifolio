import type { NextApiRequest, NextApiResponse } from "next"
import sendgrid from "@sendgrid/mail";

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

    console.log(body)
    
    if (!body.name || !body.email || !body.message) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Something is not filled' })
    }

    const sendgridApi = process.env.SENDGRID_API_KEY;
    
    if(!sendgridApi) {
      throw new Error()
    } 

    sendgrid.setApiKey(sendgridApi)

    const msg = {
      to: 'iliamfer@hotmail.com', 
      from: 'iliamfer@hotmail.com',
      subject: 'Mensagem do portifolio',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sendgrid.send(msg).then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
    })

    res.status(200).json({ data: `${body.name} ${body.email} ${body.message}` })
  }