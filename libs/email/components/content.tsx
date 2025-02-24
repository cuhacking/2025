import { Button, Card } from '@/email'
import { Text } from '@react-email/components'

export function Content({ title, body }) {
  return (
    <table className="w-full max-w-[600px] mx-auto bg-black">
      <tbody>
        <tr>
          <td className="px-10 py-0">
            <Card title={title}>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-center">
                      {body.buttonLink && (
                        <a href={body.buttonLink}>
                          <Button>
                            <Text className="m-0 p-0">{body.buttonText}</Text>
                          </Button>
                        </a>
                      )}
                      <Text className="text-sm text-[#e6e6e6] font-mono">
                        {body.text}
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
