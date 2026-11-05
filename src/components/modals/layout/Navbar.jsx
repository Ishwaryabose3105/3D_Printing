import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'

import Logo from '../common/Logo'
import Button from '../common/Button'
import useScrolled from '../../hooks/useScrolled'
import useTheme from '../../hooks/useTheme'
import useModal from '../../hooks/useModal'
import { navLinks } from '../../data/navigation'

function NavItem({ link, onClick }) {
  // section links like /#work don't need an active state
  if (link.to.includes('#')) {
    return (
      <Link to={link.to} onClick={onClick} className="text-muted transition-colors hover:text-blue-400">
        {link.label}
      </Link>
    )
  }

  return (
    <NavLink
      to={link.to}
      end
      onClick={onClick}
      className={({ isActive }) => `transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-muted'}`}
    >
      {link.label}
    </NavLink>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(20)
  const { theme, toggleTheme } = useTheme()
  const { openQuote } = useModal()

  const closeMenu = () => setMenuOpen(false)

  const handleQuoteClick = () => {
    closeMenu()
    openQuote()
  }

  const showBackground = scrolled || menuOpen

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        showBackground ? 'border-line bg-page/90 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="flex h-[68px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-12">
        <Logo onClick={closeMenu} />

        <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] lg:flex">
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-blue-950/40 hover:text-blue-400"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* on small phones this button moves into the mobile menu */}
          <div className="hidden sm:block">
            <Button variant="primary" size="sm" onClick={handleQuoteClick}>
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full text-blue-400 hover:bg-blue-950/40 lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full flex h-[calc(100svh-68px)] flex-col gap-5 border-t border-line bg-page p-8 text-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} onClick={closeMenu} />
            ))}
            <Button variant="primary" onClick={handleQuoteClick} className="mt-4 self-start sm:hidden">
              Get a Quote
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
