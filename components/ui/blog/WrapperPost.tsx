import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { AppMeta, MainLayout } from '../../layout';

interface WrapperPostProps {
  meta: {
    title: string;
    cover: string;
    excerpt: string;
    date: string;
    author: string;
    authorUserName: string;
    image: string;
  };
}

export const WrapperPost: FC<PropsWithChildren<WrapperPostProps>> = ({
  meta,
  children,
}) => {
  return (
    <MainLayout>
      <AppMeta
        title={meta.title}
        description={meta.excerpt}
        cover={meta.cover}
      />
      <div className="m-auto max-w-3xl mt-20 py-5">
        {/* HEADER */}
        <div className="max-w-xl m-auto">
          <h1 className="font-mono text-4xl text-center my-4 text-white-l-ddev">
            {meta.title}
          </h1>

          <div className="flex justify-between items-center m-3">
            <div className="flex items-center text-xs space-x-3 ">
              <div>
                <Image
                  className="rounded-full"
                  loading="lazy"
                  src="/img/avatar-adan-uri.jpeg"
                  alt="Acerca de mi Adan Uri Plata"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-mono text-green-ddev">{meta.author}</p>
                <p className="font-mono  ">{meta.authorUserName}</p>
              </div>
            </div>
            <div>
              <time className="text-sm font-mono text-orange-ddev ">
                {meta.date}
              </time>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="py-5 font-serif text-lg font-light markdown">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default WrapperPost;

// ContainerPost.getLayout = function getLayout(ContainerPost: ReactElement) {
//     return (
//       <MainLayout>
//         {ContainerPost}
//       </MainLayout>
//         )
//   }
