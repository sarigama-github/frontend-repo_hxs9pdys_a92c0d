import { useState, useRef } from 'react'
import { Menu, ChevronDown, ChevronRight, Phone, Mail, ArrowRight, Leaf, Boxes } from 'lucide-react'

const categories = [
  {
    name: 'Plywood',
    color: 'from-amber-100 to-orange-100',
    accent: 'text-amber-900',
    items: [
      { title: 'Commercial', desc: 'For interior carpentry and cabinetry' },
      { title: 'Marine Grade', desc: 'Moisture-resistant, high durability' },
      { title: 'Film Faced', desc: 'Shuttering, concrete formwork' },
    ],
  },
  {
    name: 'MDF',
    color: 'from-stone-100 to-stone-50',
    accent: 'text-stone-900',
    items: [
      { title: 'Standard', desc: 'Smooth surface for painting' },
      { title: 'Moisture Resistant', desc: 'Kitchens and humid spaces' },
      { title: 'E0/E1 Low Emission', desc: 'Eco-friendly formaldehyde levels' },
    ],
  },
  {
    name: 'Blockboard',
    color: 'from-amber-50 to-emerald-50',
    accent: 'text-emerald-900',
    items: [
      { title: 'Commercial', desc: 'Lightweight, dimensional stability' },
      { title: 'BWP Grade', desc: 'Boiling water proof adhesive' },
      { title: 'Decorative', desc: 'Veneered faces for premium looks' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const timerRef = useRef(null)

  const openMenu = () => {
    clearTimeout(timerRef.current)
    setOpen(true)
  }
  const closeMenuSoon = () => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-sm bg-gradient-to-br from-amber-300 to-emerald-300 flex items-center justify-center shadow-sm">
              <Leaf className="text-emerald-900" size={20} />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight text-neutral-900">Nusaboard</div>
              <div className="text-xs text-neutral-500">Wood & Building Materials</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenuSoon}
            >
              <button className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900 transition-colors">
                Products <ChevronDown size={16} />
              </button>
              {open && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4">
                  <div className="w-[960px] rounded-xl border border-neutral-200 bg-white shadow-xl/10 shadow-black/5 overflow-hidden">
                    <div className="grid grid-cols-12">
                      <aside className="col-span-4 bg-neutral-50 border-r border-neutral-200 p-6">
                        <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Categories</div>
                        <ul className="space-y-1">
                          {categories.map((cat, idx) => (
                            <li key={cat.name}>
                              <button
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${
                                  activeIdx === idx ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-700 hover:bg-white'
                                }`}
                              >
                                <span className="font-medium">{cat.name}</span>
                                <ChevronRight size={16} className="text-neutral-400" />
                              </button>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 rounded-lg border border-neutral-200 p-4 bg-white">
                          <div className="text-sm font-medium text-neutral-900">Need assistance?</div>
                          <p className="text-xs text-neutral-600 mt-1">Our specialists help you choose the right panel for your project.</p>
                          <div className="flex gap-2 mt-3">
                            <a href="#" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 text-sm font-medium">
                              <Phone size={16} /> Call
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 text-sm font-medium">
                              <Mail size={16} /> Email
                            </a>
                          </div>
                        </div>
                      </aside>

                      <section className="col-span-8 p-6">
                        {categories.map((cat, idx) => (
                          <div key={cat.name} className={idx === activeIdx ? 'block' : 'hidden'}>
                            <div className={`rounded-lg p-4 bg-gradient-to-br ${cat.color} border border-neutral-200`}> 
                              <div className="flex items-center gap-2">
                                <Boxes size={18} className="text-neutral-700" />
                                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">{cat.name}</h3>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-6">
                              {cat.items.map((item) => (
                                <div key={item.title} className="group">
                                  <div className="aspect-[4/3] rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-50 border border-neutral-200 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(135deg,#b45309 0%,#a16207 25%,#92400e 50%,#78350f 75%,#451a03 100%)', mixBlendMode:'multiply'}} />
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-70" />
                                  </div>
                                  <div className="mt-3">
                                    <div className="text-sm font-semibold text-neutral-900">{item.title}</div>
                                    <p className="text-sm text-neutral-600">{item.desc}</p>
                                    <button className="mt-2 inline-flex items-center gap-1 text-terracotta-600 hover:text-terracotta-700 text-sm font-medium">
                                      Learn more <ArrowRight size={14} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="mt-6 flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                          <div>
                            <div className="text-sm font-semibold text-neutral-900">Ready to discuss your specs?</div>
                            <p className="text-sm text-neutral-600">Get a tailored quotation within 24 hours.</p>
                          </div>
                          <a href="#quote" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">Request a Quote <ArrowRight size={16} /></a>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="text-neutral-700 hover:text-neutral-900">About</a>
            <a href="#quality" className="text-neutral-700 hover:text-neutral-900">Quality</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#quote" className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50">Request a Quote</a>
          </div>

          <button className="md:hidden p-2 text-neutral-700" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
