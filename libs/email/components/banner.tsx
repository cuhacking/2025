import { Body, Container, Img, Section, Tailwind } from '@react-email/components'

export function Banner({ backgroundSrc, logoSrc }: { backgroundSrc: string, logoSrc: string }) {
  return (
    <Tailwind>
      <Body className="m-0 p-0 bg-black">
        <Container
          className={`w-full max-w-[600px] h-[192px] bg-[url(${backgroundSrc})] bg-cover bg-center text-white font-mono text-center`}
        >
          <Section>
            <table className="w-full">
              <tr>
                <td className="py-0 pb-0">
                  <h3 className="text-2xl leading-tight m-0">We hope to</h3>
                </td>
              </tr>
              <tr>
                <td className="text-center mt-[-8px]">
                  <table className="mx-auto">
                    <tr>
                      <td className="pr-2 align-middle">
                        <Img
                          src={logoSrc}
                          alt="cuHacking Logo"
                          width="60"
                          className="block"
                        />
                      </td>
                      <td className="align-middle">
                        <h1 className="text-4xl m-0">cuHacking</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

          </Section>
        </Container>
      </Body>
    </Tailwind>
  )
}
