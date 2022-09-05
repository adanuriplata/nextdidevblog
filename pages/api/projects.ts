import { NextApiRequest, NextApiResponse } from 'next';
import { ProjectData } from '../../types';
import projects from '../../contents/projects.json';

type Data = { message: string } | ProjectData[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getProjects(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getProjects = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json(projects);
};
