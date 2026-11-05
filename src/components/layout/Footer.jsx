import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

import Container from '../common/Container'
import Logo from '../common/Logo'
import { footerLinks } from '../../data/navigation'
import { siteConfig } from '../../data/siteConfig'

const linkClass = 'text-[0.92rem] text-muted transition-colors hover:text-blue-400'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-10 border-t border-line bg-surface pt-14 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 mb-4 max-w-[300px] text-[0.95rem]">{siteConfig.tagline}</p>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className={`flex items-center gap-2 ${linkClass}`}>
                <Mail size={16} /> {siteConfig.contact}shinecraft@gmail.com
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={`flex items-center gap-2 ${linkClass}`}>
                <Phone size={16} /> {siteConfig.mobile}9123456789
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-[0.95rem]">{column.title}</h3>
              <ul className="space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-[0.95rem]">Follow</h3>
            <ul className="space-y-1.5">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noreferrer" className={linkClass}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-5 text-sm">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
