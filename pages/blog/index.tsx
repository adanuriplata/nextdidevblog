import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { AppMeta, MainLayout } from '../../components/layout';
import { PostCard } from '../../components/ui';
import { PostData } from '../../types';
import { getPosts } from '../../utils/postFunctions';

interface BlogProps {
  posts: PostData[];
}

const Blog = ({ posts }: BlogProps): JSX.Element => {
  return (
    <div className="mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
      {posts.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(Blog: ReactElement) {
  return (
    <MainLayout heroTitle="Blog">
      <AppMeta
        title="Blog"
        description="Articulos sobre JavaScript, Desarrollo Web, Marketing, React, Web 3, y más."
      />
      {Blog}
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts`);
  // const posts = await data.json();
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
