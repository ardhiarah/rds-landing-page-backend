import { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'

export default function ContactForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok && json?.ok) {
        setStatus({ type: 'success', message: 'Terima kasih! Kami akan segera menghubungi Anda.' })
        form.reset()
      } else {
        throw new Error(json?.message || 'Terjadi kesalahan.')
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Gagal mengirim formulir. Coba lagi.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="nama">Nama</Label>
        <Input id="nama" name="nama" placeholder="Nama lengkap" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="nama@perusahaan.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="institusi">Institusi</Label>
        <Input id="institusi" name="institusi" placeholder="Nama bank/lembaga" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pesan">Pesan</Label>
        <Textarea id="pesan" name="pesan" placeholder="Kebutuhan pelatihan/sertifikasi" required />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" size="lg" disabled={loading}>{loading ? 'Mengirim...' : 'Kirim'}</Button>
        <a href="mailto:info@rds-indonesia.com">
          <Button variant="outline" size="lg" type="button">Email Langsung</Button>
        </a>
      </div>
      {status && (
        <p className={status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
          {status.message}
        </p>
      )}
    </form>
  )
}

