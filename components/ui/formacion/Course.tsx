import Image from 'next/image';
import { CourseData } from '../../../types/Courses';

export const Course = ({ uid, img, linkOriginal, name }: CourseData) => {
  return (
    <div key={uid} className="text-center">
      <div>
        <Image
          src={`/img/courses/${img}`}
          loading="lazy"
          width={202}
          height={138}
          alt=""
        />
      </div>
      <a href={linkOriginal} target="_blank" rel="noreferrer">
        <p className="text-sm hover:text-green-ddev transition duration-500 ease-in-out">
          {name}
        </p>
      </a>
    </div>
  );
};

export default Course;
