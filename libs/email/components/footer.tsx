import { Img, Tailwind, Text } from '@react-email/components'

function socialLinks({ alt, img, link }: { alt: string, img: string, link: string }) {
  return (
    <td align="center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <Img
          src={img}
          alt={alt}
          className="w-8 h-8 mx-auto"
        />
      </a>
    </td>
  )
}

export function Footer({ socials, logoSrc }: { socials: { alt: string, img: string, link: string }[], logoSrc: string }) {
  return (
    <Tailwind>
      <table
        className="w-full max-w-[600px] mx-auto bg-[#262626] border-t border-[#333]"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          {/* Social Icons Row */}
          <tr>
            <td align="center" className="p-5">
              <table className="mx-auto" cellPadding="0" cellSpacing="20">
                <tbody>
                  <tr>
                    {socials.map(social => (
                      socialLinks(social)
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* Logo Row */}
          <tr>
            <td align="center">
              <a
                href="https://cuhacking.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  src={logoSrc}
                  alt="cuHacking Logo"
                  className="w-12 h-12 my-5 mx-auto"
                />
              </a>
            </td>
          </tr>
          {/* Unsubscribe Row */}
          <tr>
            <td align="center">
              <Text className="text-sm text-[#888] font-mono">
                <a
                  href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                  className="text-[#888] underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="u thought u could unsubscribe? HA!! we promise to not spam you tho💚"
                >
                  Unsubscribe
                </a>
              </Text>
            </td>
          </tr>
          {/* Copyright Row */}
          <tr>
            <td align="center" className="pb-5">
              <Text className="text-[10px] text-[#555] font-mono">
                &copy; 2025 cuHacking. All rights reserved.
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Tailwind>
  )
}
