import { CourseData } from '../../../types';
import Course from './Course';
import PlaceHolderCourse from './PlaceHolderCourse';

type categoryCourses =
  | 'Ingenieria de Software y Desarrollo'
  | 'Web 3'
  | 'Marketing'
  | 'Emprendimiento y Desarrollo Personal';

interface CourseCategoryProps {
  courses: CourseData[];
  category: categoryCourses;
  isLoading: boolean;
}

export const CoursesCategory = ({
  courses,
  category,
  isLoading,
}: CourseCategoryProps) => {
  return (
    <div className="my-16">
      <h4 className="md:text-left text-xl my-3">
        {category == 'Marketing' ? '📉' : '👨‍🎓'}{' '}
        {category == 'Ingenieria de Software y Desarrollo'
          ? 'Ingeniería de Software y Desarrollo'
          : category}
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-900 md:p-2 md:py-8 pl-0">
        {isLoading ? (
          <PlaceHolderCourse quantity={3} />
        ) : (
          courses
            .filter((course) => course.category == category)
            .map((item) => <Course key={item.uid} {...item} />)
        )}
      </div>
    </div>
  );
};

export default CoursesCategory;
