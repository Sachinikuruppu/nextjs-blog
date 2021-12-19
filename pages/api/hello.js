//can be deployed as Serverless Functions (also known as Lambdas).
//http://localhost:3000/api/hello , You should see {"text":"Hello"}

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
  }