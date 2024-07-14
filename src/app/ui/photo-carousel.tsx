export function PhotoCarousel({ photos }: { photos: string[] }) {
  return (
    <div className="mx-auto max-w-max">
      <div className="__carousel flex gap-6 overflow-x-scroll md:pb-4">
        {photos.map((photo, index) => (
          <figure
            key={index}
            className="__slide w-[80vw] shrink-0 rounded-lg bg-gray-800 md:w-[43vw] xl:w-[30rem]"
          >
            <img src={photo} />
          </figure>
        ))}
      </div>
    </div>
  )
}
