
interface PlaceHolderCourseProps{
  quantity: number
}


export const PlaceHolderCourse = ({quantity}: PlaceHolderCourseProps) => {

  const placeHolderArray = Array.from(Array(quantity).keys())

  return (
    <>
    {
      placeHolderArray.map( (item, index) => (
        <div key={index} className=" animate-pulse m-auto">
          <div className="rounded-md bg-slate-700 w-52 h-28 "></div>
          <div className="justify-center ">
            <div className="rounded-md hover:text-green-ddev bg-slate-700 w-48 h-1 mt-2 ml-2 " ></div>
            <div className="rounded-md hover:text-green-ddev bg-slate-700 w-44 h-1 mt-2 ml-4 " ></div>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default PlaceHolderCourse;