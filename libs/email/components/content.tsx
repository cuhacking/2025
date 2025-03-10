import { Button, Card } from '@/email'
import { Text } from '@react-email/components'

export function Content({ title, body }) {
  const events = body.events || []

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
                      <pre className="text-sm text-[#e6e6e6] font-mono text-left">
                        {body.text}
                      </pre>
                      {body.buttonLink && (
                        <>
                          <a href={body.buttonLink} className="block">
                            <Button>
                              <Text className="m-0 p-0">
                                {body.buttonText}
                              </Text>
                            </Button>
                          </a>
                          <br />
                          <a
                            href={body.secondButtonLink || body.buttonText}
                            className="block"
                          >
                            <Button>
                              <Text className="m-0 p-0">
                                {body.secondButtonText || body.buttonText}
                              </Text>
                            </Button>
                          </a>
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </td>
        </tr>
        {events.length > 0 && (
          <tr>
            <td className="px-10 pt-2">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>
                      <Card title={events[0].title}>
                        <Text className="text-sm text-[#e6e6e6] font-mono">
                          {events[0].text}
                        </Text>
                        {events[0].buttonText && (
                          <Button>
                            <Text className="m-0 p-0">
                              {events[0].buttonText}
                            </Text>
                          </Button>
                        )}
                        {events.length > 1 && (
                          <table className="w-full">
                            <tbody>
                              {events.slice(1).map((event, idx) => (
                                <tr key={idx}>
                                  <td className="py-4 pl-4">
                                    <Card title={event.title}>
                                      <Text className="text-sm text-[#e6e6e6] font-mono">
                                        {event.text}
                                      </Text>
                                      {
                                        event.buttons.map(button =>
                                          (
                                            <div key={button.text} style={{ marginBottom: 8 }}>
                                              <a href={button.link} className="block no-underline text-black">
                                                <Button>
                                                  <Text className="m-0 p-0">
                                                    {button.text}
                                                  </Text>
                                                </Button>
                                              </a>
                                            </div>
                                          ),
                                        )
                                      }
                                    </Card>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </Card>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
