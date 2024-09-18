import Link from 'next/link'

export default function Cta() {
  return (
    <section className="bg-slate-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="relative max-w-3xl mx-auto text-center">

            <div className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block" aria-hidden="true">
              <svg className="fill-slate-300" width="56" height="43">
                <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
              </svg>
            </div>

            <div className="relative">
              <p className="text-xl text-slate-500 mb-8">We know this is a difficult time for your family. If you need any changes to the memorial page or want to add special features, just let us know. Our goal is to make honoring your loved one as easy and stress-free as possible for you.</p>
              <div>
                <Link className="btn text-white bg-gray-600 group" href="/request-demo">
                  Get in touch <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}