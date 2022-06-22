import { NextRequest, NextResponse } from "next/server"

export default function handler(req: NextRequest, res: NextResponse) {
    // Get data submitted in request's body.
    const body = req.body
    
    if (!body.name || !body.email || !body.message) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Something is not filled' })
    }

    res.status(200).json({ data: `${body.name} ${body.email} ${body.message}` })
  }