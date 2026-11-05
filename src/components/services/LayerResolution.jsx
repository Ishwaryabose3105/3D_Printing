import { useState } from 'react'

import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import Reveal from '../common/Reveal'

// Draws a "staircase" over a diagonal line. Thicker layers = bigger, rougher steps.
function buildLayerPath(layerHeight) {
  const stepHeight = layerHeight * 1.6
  let x = 10
  let y = 110
  let path = 'M10 110'

  while (y - stepHeight >= 10) {
    y -= stepHeight
    x += stepHeight * 2.8
    path += `V${y}H${x}`
  }

  return path + 'L290 10V110Z'
}

function getDescription(layerHeight) {
  if (layerHeight <= 10) return 'Fine: smoother curves and sharper detail, longer print time.'
  if (layerHeight <= 20) return 'Balanced: good detail at an everyday speed.'
  return 'Draft: fastest results, with visible layer lines.'
}

export default function LayerResolution() {
  // stored in hundredths of a millimetre, so 20 = 0.20 mm
  const [layerHeight, setLayerHeight] = useState(20)

  return (
    <Section id="layer-resolution">
      <SectionHeading
        title="Layer resolution"
        text="Layer height sets the balance between surface detail and print time."
      />

      <Reveal>
        <Card className="grid items-center gap-8 p-6 sm:p-7 md:grid-cols-[1fr_1.3fr]">
          <svg viewBox="0 0 300 120" className="w-full" aria-hidden="true">
            <path d="M10 110L290 10" stroke="url(#grad-silver)" strokeDasharray="4 4" fill="none" />
            <path
              d={buildLayerPath(layerHeight)}
              fill="url(#grad-blue)"
              fillOpacity=".3"
              stroke="url(#grad-blue)"
              strokeWidth="2"
            />
          </svg>

          <div className="grid gap-3">
            <h3>{(layerHeight / 100).toFixed(2)} mm layers</h3>
            <div>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={layerHeight}
                onChange={(e) => setLayerHeight(Number(e.target.value))}
                aria-label="Layer height"
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>0.05 mm</span>
                <span>0.30 mm</span>
              </div>
            </div>
            <p>{getDescription(layerHeight)}</p>
            <small className="text-sm text-muted">
              Illustrative values. Final options depend on the printer and material.
            </small>
          </div>
        </Card>
      </Reveal>
    </Section>
  )
}
