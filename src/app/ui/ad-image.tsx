export type Ad = {
  literal: string
  style: string
}

export function AdImage({
  image,
  width,
  height,
  ads,
}: {
  image: string
  width: number
  height: number
  ads: Ad[]
}) {
  return (
    <div className="relative">
      <img
        src={image}
        width={width}
        height={height}
        className="__placeholder"
      />
      {ads.map((ad, index) => (
        <div key={index} className={`absolute ${ad.style}`}>
          {ad.literal}
        </div>
      ))}
    </div>
  )
}
