import Image from 'next/image';

export default function Blockbuster({overhead, title, description, background}) {

  const bg = typeof background === 'object' ? 'bg-black' : background;

  return (
    <section className={`relative flex flex-col justify-end min-h-[50dvh] w-screen md:mb-0 mx-auto pt-12 md:py-20 bg-center bg-cover ${bg}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"/>

      <div className="container mx-auto z-20">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="w-full p-8 md:p-14">
            {/*<p className="overhead">{overhead}</p>*/}
            <h2
              dangerouslySetInnerHTML={{__html: title}}
              className="my-auto ft-8 font-bold text-center text-white"
            />
            <p className="ft-3 mt-8 mx-auto w-2/3 text-center text-white">{description}</p>
          </div>
        </div>
      </div>

      {/*<div className="w-full pt-[60%] absolute bottom-0 bg-gradient-to-t from-brand-2 via-transparent md:via-transparent to-transparent opacity-90 z-10"/>*/}
      {typeof background === 'object' &&
        <Image src={background} layout="fill" className="object-cover"/>
      }
    </section>
  );
}