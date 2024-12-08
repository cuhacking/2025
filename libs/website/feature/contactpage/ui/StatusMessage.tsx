import React from 'react'

interface StatusMessageProps {
  type: 'success' | 'error'
}

export function StatusMessage({ type }: StatusMessageProps): React.JSX.Element {
  return (
    <div
      className={`p-4 rounded-lg flex items-center gap-2 ${
        type === 'success'
          ? 'bg-green-500/20 border border-green-500/50 text-green-400'
          : 'bg-red-500/20 border border-red-500/50 text-red-400'
      }`}
    >
      {/* Icon */}
      <span className="text-xl">
        {type === 'success' ? '✅' : '❌'}
      </span>

      {/* Message */}
      <p className="font-medium">
        {type === 'success'
          ? 'Message sent successfully!'
          : 'Failed to send message. Please try again.'}
      </p>
    </div>
  )
}
