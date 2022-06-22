import type { NextApiRequest, NextApiResponse } from "next"

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

    res.status(200).json({ data: `${body.name} ${body.email} ${body.message}` })
  }