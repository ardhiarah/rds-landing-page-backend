import { useState, useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { url } = usePage()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href) => (href === '/' ? url === '/' : url.startsWith(href))
  const desktopItemClass = (href) => `${navigationMenuTriggerStyle()} ${isActive(href) ? 'bg-accent text-accent-foreground' : ''}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">R</span>
          <span className="text-sm font-bold tracking-wide">RDS Risk Management</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/')}> 
                <Link href="/">Beranda</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/tentang')}>
                <Link href="/tentang">Tentang</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/layanan')}>
                <Link href="/layanan">Layanan</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/klien')}>
                <Link href="/klien">Klien</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/galeri')}>
                <Link href="/galeri">Galeri</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={desktopItemClass('/kontak')}>
                <Link href="/kontak">Kontak</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </nav>
        <button aria-label="Menu" className="md:hidden rounded-md border border-neutral-200 bg-white p-2 text-neutral-700" onClick={() => setOpen(true)}>☰</button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-dvh w-4/5 max-w-sm border-l border-neutral-200 bg-white px-6 py-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">R</span>
                <span className="text-sm font-bold tracking-wide">RDS Risk Management</span>
              </Link>
              <button aria-label="Tutup" className="rounded-md border border-neutral-200 bg-white p-2 text-neutral-700" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="mt-6 space-y-3">
              <Link href="/" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Beranda</Link>
              <Link href="/tentang" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Tentang</Link>
              <Link href="/layanan" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Layanan</Link>
              <Link href="/klien" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Klien</Link>
              <Link href="/galeri" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Galeri</Link>
              <Link href="/kontak" className="block rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>Kontak</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
