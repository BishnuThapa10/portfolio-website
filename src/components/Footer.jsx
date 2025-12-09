import React from 'react'
import { footer } from '../data/footer.js'

export default function Footer() {
  return (
    <>
        {footer.map((para, i) => (
          <p key={i} className="text-slate-600 leading-relaxed">
            {para.text.map((part, idx) =>
              para.links?.[part] ? (
                <a
                  key={idx}
                  href={para.links[part]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${part} (opens in a new tab)`}
                  className="transitionfont-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">
                  {part}
                </a>
              ) : (
                <span key={idx}>{part}</span>
              )
            )}
          </p>
        ))}
    </>
  )
}
