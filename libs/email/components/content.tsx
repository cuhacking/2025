import type { GenericContent } from '@/email/types'
import { Button, Card } from '@/email'
import { Text } from '@react-email/components'

export function Content({ title, body }: GenericContent) {
  return (
    <table className="w-full max-w-[600px] mx-auto bg-black">
      <tr>
        <td className="px-10 py-0">
          <Card title={title}>
            <table className="w-full">
              <tr>
                <td className="text-center">
                  {body.map(content => (
                    <div key={content.text}>
                      { content.buttonLink
                        ? (
                            <a href={content.buttonLink}>
                              <Button>
                                <Text className="m-0 p-0">{content.buttonText}</Text>
                              </Button>
                            </a>
                          )
                        : null}
                      <Text className="text-sm text-[#e6e6e6] font-mono">
                        {content.text}
                      </Text>
                    </div>
                  ))}
                </td>
              </tr>
            </table>
          </Card>
        </td>
      </tr>
    </table>
  )
}
