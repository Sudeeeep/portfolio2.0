import { ImageResponse } from 'next/og'
import { personalInfo } from '@/data/portfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${personalInfo.name} — ${personalInfo.role}`

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0e1116',
        }}
      >
        <div style={{ fontSize: 30, color: '#2dd4bf', marginBottom: 28 }}>
          {'// portfolio'}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, color: '#e6e9ef' }}>
          {personalInfo.name}
        </div>
        <div style={{ fontSize: 42, color: '#98a1b3', marginTop: 16 }}>
          {`${personalInfo.role} · ${personalInfo.location}`}
        </div>
        <div style={{ fontSize: 30, color: '#2dd4bf', marginTop: 48 }}>
          event-driven services · enterprise integration · LLM tools
        </div>
      </div>
    ),
    size
  )
}
