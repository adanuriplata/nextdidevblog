import { useEffect, useState } from 'react';
import { ProjectData } from '../types';

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}projects`
        );
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error to fetch data:', error);
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
