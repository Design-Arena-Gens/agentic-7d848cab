import Link from 'next/link';

const footerLinks = [
  {
    title: 'Collections',
    links: [
      { label: 'New Releases', href: '/catalog#new' },
      { label: 'Award Winners', href: '/catalog#awards' },
      { label: 'Bedtime Stories', href: '/catalog#bedtime' },
      { label: 'STEM Adventures', href: '/catalog#stem' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Our Curation', href: '/#curation' },
      { label: 'Contact', href: '/#newsletter' },
      { label: 'Gift Cards', href: '/#gifts' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping & Returns', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70 py-12 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="max-w-md space-y-4">
          <h2 className="font-heading text-2xl text-ink">Luminara Stories</h2>
          <p className="text-sm text-ink/70">
            A storybook marketplace curating timeless adventures for dreamers of all ages. From cosmic odysseys to whispered forest myths, every book is handpicked to ignite wonder.
          </p>
          <p className="text-xs text-ink/60">© {new Date().getFullYear()} Luminara Stories. All rights reserved.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 text-sm text-ink/70 sm:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-primary-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
