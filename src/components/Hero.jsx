import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-neutral-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 size-[420px] rounded-full bg-emerald-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 size-[420px] rounded-full bg-amber-100 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-12 gap-10 py-20">
          <div className="col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 w-max">
              <CheckCircle2 size={16} /> Trusted Indonesian Supplier
            </div>

            <h1 className="mt-5 text-5xl/[1.1] font-semibold tracking-tight text-neutral-900">
              Premium Plywood, MDF, and Blockboard
              <span className="block text-neutral-500">Engineered for lasting performance.</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
              Nusaboard supplies certified wood panels with consistent quality and responsible sourcing.
              From architectural interiors to export-grade packaging, we deliver reliability at scale.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
                Request a Quote <ArrowRight size={18} />
              </a>
              <a href="#catalog" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors">
                View Catalog
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Shield className="text-emerald-700" size={18} /> ISO & E0/E1 Options</div>
              <div className="flex items-center gap-2"><Shield className="text-emerald-700" size={18} /> Moisture Resistant Grades</div>
              <div className="flex items-center gap-2"><Shield className="text-emerald-700" size={18} /> Export-ready Packing</div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-200/60 via-amber-200/60 to-transparent rounded-xl blur-xl" />
              <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-xl/10 shadow-black/5">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="aspect-[4/5] rounded-lg bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="aspect-[4/5] rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                  <div className="aspect-[4/5] rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                  <div className="aspect-[4/5] rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                </div>

                <div className="p-5 border-t border-neutral-200 bg-gradient-to-r from-white to-neutral-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-neutral-500">Featured</div>
                      <div className="font-semibold text-neutral-900">Natural wood textures</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-neutral-500">Lead time</div>
                      <div className="font-semibold text-neutral-900">7–14 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
