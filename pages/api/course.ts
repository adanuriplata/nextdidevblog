import { NextApiRequest, NextApiResponse } from 'next';
import { CourseData } from '../../types';
import courses from '../../contents/courses.json';

type Data = { message: string } | CourseData[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCourses(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getCourses = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json(courses);
};
