import { useState, useEffect } from "react";
import { CourseData } from "../types";


export const useFetchCourses = () => {

  const [courses, setCourses] = useState<CourseData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCourses = ( async() => {
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:3000/api/course');
        const data = await response.json()
        setCourses(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      }
      
    })
    getCourses();
  }, [setCourses])
  
  return { isLoading, courses}
}