import { ReactElement } from "react";
import MainLayout from "../../components/MainLayout";
import { PostCard } from "../../components/ui";


const Blog = () => {
  return (
      <div className="mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
        {
          [1,2,3,4,5,6,7].map((item, index) => <PostCard key={index} />)
        }        
      </div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(Blog: ReactElement) {
  return (
    <MainLayout heroTitle="Blog" >
      {Blog}
    </MainLayout>
      ) 
}