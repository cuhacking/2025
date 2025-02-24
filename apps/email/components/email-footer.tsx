import process from 'node:process'
import { Img, Tailwind, Text } from '@react-email/components'

const baseUrl = process.env.ASSET_URL || 'http://localhost:3000'

export function EmailFooter() {
  return (
    <Tailwind>
      <div className="text-center p-5 border-t border-[#333] bg-[#262626]">
        <div className="flex justify-center gap-5 mb-5">
          <a
            href="https://instagram.com/cuhacking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Img
              src={`${baseUrl}/static/instagram-white.png`}
              alt="Instagram"
              className="w-8 h-8 mx-auto"
            />
          </a>
          <a
            href="https://github.com/cuhacking/2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Img
              src={`${baseUrl}/static/github-white.png`}
              alt="GitHub"
              className="w-8 h-8 mx-auto"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/cuhacking/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Img
              src={`${baseUrl}/static/linkedin-white.png`}
              alt="LinkedIn"
              className="w-8 h-8 mx-auto"
            />
          </a>
          <a
            href="https://linktr.ee/cuhacking_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Img
              src={`${baseUrl}/static/linktree-white.png`}
              alt="Linktree"
              className="w-8 h-8 mx-auto"
            />
          </a>
        </div>

        {/* Logo */}
        <a href="https://cuhacking.ca/" target="_blank" rel="noopener noreferrer">
          <Img
            src={`${baseUrl}/static/logo.png`}
            alt="cuHacking Logo"
            className="w-12 h-12 my-5 mx-auto"
          />
        </a>

        {/* Additional Footer Info */}
        <Text className="text-sm text-[#888] mt-2 mb-5 font-mono">
          <a
            href="https://unsubscribe-link.com"
            className="text-[#888] underline hover:text-white"
          >
            Unsubscribe
          </a>
        </Text>
        <Text className="text-[10px] text-[#555] font-mono">
          &copy; 2025 cuHacking. All rights reserved.
        </Text>
      </div>
    </Tailwind>
  )
}
