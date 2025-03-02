/* import process from 'node:process' */
import { Img, Tailwind, Text } from '@react-email/components'

/* const baseUrl = process.env.ASSET_URL || 'http://localhost:3000' */
/* const baseUrl = process.env.CUHACKING_2025_EMAIL_TEMPLATES_SITE_LOCAL_URL */

export function Footer() {
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
              // src={`${baseUrl}/static/instagram-white.png`}
              src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/instagram-white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEvaW5zdGFncmFtLXdoaXRlLnBuZyIsImlhdCI6MTc0MDkxMDUyOSwiZXhwIjoxNzcyNDQ2NTI5fQ.OMmwhkvoT3U0yuqTdpqXodLZCXzB4XksWN_EEU5sAXg"
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
              // src={`${baseUrl}/static/github-white.png`}
              src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/github-white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEvZ2l0aHViLXdoaXRlLnBuZyIsImlhdCI6MTc0MDkxMDU5OSwiZXhwIjoxNzcyNDQ2NTk5fQ.-RM9pg4Jvdc3BZO7FFGoA0Zg8hssSpaQ9MwGX39SaaQ"
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
              // src={`${baseUrl}/static/linkedin-white.png`}
              src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/linkedin-white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEvbGlua2VkaW4td2hpdGUucG5nIiwiaWF0IjoxNzQwOTEwNjM0LCJleHAiOjE3NzI0NDY2MzR9.FV1aNge2mI5lZnrAXLDa8naQczwhEXqInlIBGF4OW5c"
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
              // src={`${baseUrl}/static/linktree-white.png`}
              src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/linktree-white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEvbGlua3RyZWUtd2hpdGUucG5nIiwiaWF0IjoxNzQwOTEwNjk5LCJleHAiOjE3NzI0NDY2OTl9._PKfFVHOdIssQGUjd1T2lSTTEu1gUG0T-yyGqPfBL-E"
              alt="Linktree"
              className="w-8 h-8 mx-auto"
            />
          </a>
        </div>

        {/* Logo */}
        <a href="https://cuhacking.ca/" target="_blank" rel="noopener noreferrer">
          <Img
            // src={`${baseUrl}/static/logo.png`}
            src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEvbG9nby5wbmciLCJpYXQiOjE3NDA5MTA2NzUsImV4cCI6MTc3MjQ0NjY3NX0.jsn_xtt4xilHxoZgG7jwGtcY_DNEwQB1Z4FccFNcxs4"
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
