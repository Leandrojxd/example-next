import Image from "next/image";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery({ images }) {
  console.log(images)
  return (
    <div
      className="max-w-2xl mx-auto py-16 px-4 sm: py-24
  sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        className="grid grid-cols-1 gap-y-10 sm:grid-cols-2
   gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        {
          images.map((image) => (
            <BlurImage key={image.id} image = {image}/>
          ))
        }
      </div>
    </div>
  );
}

function BlurImage({image}) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href="#" className="group">
      <div
        className="aspect-w-1 aspect-h-1 xl: aspect-w-7 xl: aspect-h-8 w-full
  overflow-hidden rounded-1g "
      >
        <Image
          alt=""
          src={image.imageSrc}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          width={200}
          height={200}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm Otext-arav-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium Otext-gray-900">{image.username}</p>
    </a>
  );
}

export async function getStaticProps() {
  const { data } = await supabase.from('images').select();
  return {
    props: {
      images: data,
    },
  };
}
