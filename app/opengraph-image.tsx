import { ImageResponse } from 'next/og'

export const alt = 'Oskari Pessinen | Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center w-full h-full bg-white">
        <div tw="flex flex-col items-center">
          <h1 
            tw="text-7xl font-black text-black tracking-tighter"
            style={{ fontFamily: 'sans-serif', fontWeight: '900' }}
          >
            oskaripessinen.com
          </h1>
          
        </div>

      </div>
    ),
    { ...size }
  )
}