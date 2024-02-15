import Image from "next/image";
import Link from "next/link";
import { Photos } from "./photos";

const Home = () => {
  console.log(Photos);
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Photos.map((photo, id, url) => (
          <Link key={id} href={`/photo-feed/${id}`} className="photo-item">
            <Image
              style={{ width: "300px", height: "300px", margin: "1rem" }}
              src={photo.url.src} // Use the src from photo.url
              alt={photo?.title}
              width={photo.url.width} // Set width and height
              height={photo.url.height}
              blurDataURL={photo.url.blurDataURL}
              placeholder="blur"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Home;
