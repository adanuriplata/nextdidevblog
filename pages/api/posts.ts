import { NextApiRequest, NextApiResponse } from "next";
import { PostData } from "../../types";
import { getPosts } from '../../utils/postFunctions';

type Data = 
| {message: string}
| PostData[]

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  switch( req.method ) {
    case 'GET':
      return getPostsAPi(req, res)
    
      default: 
        return res.status(400).json({ message: 'Bad request'})
  }
}

const getPostsAPi = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const posts = getPosts()
  return res.status(200).json(posts)
}
