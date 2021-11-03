import ArrowLinkIcon from "../../globals/icons/ArrowLinkIcon";
import Image from "next/image";

const ItemProject = ({ name, description, technologies, image, siteurl }) => {
  return (
    <div className="transition duration-500 ease-in-out hover:bg-gray-800 bg-gray-900 border-gray-900 shadow-lg p-8 md:mx-0 mx-5 rounded-lg hover:shadow-solid border-2 hover:border-green-ddev hover:text-green-ddev ">
      <div className="mx-auto rounded-md">
        <Image
          className="mx-auto rounded-md"
          src={`/img/projects/${image}`}
          alt={`proyecto ${name}`}
          loading="lazy"
          width={247}
          height={154}
        />
      </div>
      <div className="mt-6 block mx-auto">
        <h5 className="text-center md:text-2xl text-xl">{name}</h5>
      </div>
      <div className="mt-1 text-white-ddev text-sm md:text-base">
        <p>{description}</p>
      </div>
      <div className="mt-2">
        <span className="text-green-ddev font-mono text-xs">
          {technologies}
        </span>
      </div>
      <div className="flex justify-end mt-4">
        <div className="px-4">
          <a href={siteurl} target="_BLANK">
            <ArrowLinkIcon className=" w-8 fill-current text-white-ddev" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemProject;
