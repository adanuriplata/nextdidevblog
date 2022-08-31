import MainLayout from "../../MainLayout";
import { PropsWithChildren, ReactElement } from "react";
import Image from "next/image";



export const ContainerPost = ({children}: PropsWithChildren) => {
    return (
        <MainLayout>
        <div className="m-auto max-w-3xl ">
            {/* HEADER */}
            <div className="max-w-lg m-auto">
                <h1 className="font-mono text-3xl text-center my-4 text-white-l-ddev">Errores comunes al crear una campaña de Google Ads</h1>

                <div className="flex justify-between items-center m-3">
                    <div className="flex items-center text-xs space-x-3 ">
                        <div><Image
                            className="rounded-full"
                            loading="lazy"
                            src="/img/avatar-adan-uri.jpeg"
                            alt="Acerca de mi Adan Uri Plata"
                            width={40}
                            height={40}
                            />
                        </div>
                        <div>
                            <p className="font-mono text-green-ddev">Adan Uri Plata</p>
                            <p className="font-mono  ">@adanuriplata</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono text-orange-ddev ">Feb 11, 2021</p>   
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <article className="py-5 font-serif text-lg font-light " >
{children}
            </article>
        </div>
        </MainLayout>

    )
}

export default ContainerPost;

// ContainerPost.getLayout = function getLayout(ContainerPost: ReactElement) {
//     return (
//       <MainLayout>
//         {ContainerPost}
//       </MainLayout>
//         ) 
//   }