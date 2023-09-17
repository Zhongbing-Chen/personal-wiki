import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <>

    <svg
      height="20"
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    
      <path
        d="m64.8833 1.81335-2.8464 2.84638C47.1274 19.5692 22.9543 19.5692 8.04485 4.65972L5.19848 1.81335c-.93479-.93478-2.45037-.93478-3.38515 0-.93479.93478-.93478 2.45037 0 3.38515L4.6597 8.04487c14.9095 14.90953 14.9095 39.08263 0 53.99213l-2.84637 2.8463c-.93479.9348-.93479 2.4504 0 3.3852.93478.9348 2.45037.9348 3.38515 0l2.84637-2.8464c14.90955-14.9095 39.08255-14.9095 53.99205 0l2.8464 2.8464c.9348.9348 2.4504.9348 3.3852 0 .9347-.9348.9347-2.4504 0-3.3852l-2.8464-2.8463c-14.9095-14.9095-14.9095-39.0826 0-53.99213l2.8464-2.84637c.9347-.93478.9347-2.45037 0-3.38515-.9348-.93478-2.4504-.93478-3.3852 0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
    
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Zhongbing's Wiki
    </span>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: "%s – Zhongbing's Wiki"
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + " – Zhongbing's Wiki ": "Zhongbing's Wiki"}
        />
        <meta name="og:image" content={"Zhongbing's Wiki"} />
        <meta name="apple-mobile-web-app-title" content="Zhongbing's Wiki" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="http://124.221.36.105:3000"
          >
            <span>Powered by</span>
              Zhongbing Chen
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Zhongbing's Project.
        </p>
      </div>
    )
  }
}

export default config
