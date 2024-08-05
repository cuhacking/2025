import QRCode from 'react-qr-code'

export function TeamQRCode(
  { teamId }: { teamId: string },
) {
  return (
    <QRCode
      size={256}
      className="w-15% max-w-15% h-auto m-8"
      value={`http://localhost:8000/t/j/${teamId}`}
      viewBox="0 0 256 256"
    />
  )
}
