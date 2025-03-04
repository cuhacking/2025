import Link from 'next/link';
import '../../theme/tailwind.scss';

const OAuthButton = ({ href, iconSrc, bgColor, altText }) => {
  return (
    <Link href={href} style={{ flex: 1 }}>
      <button style={{ ...buttonStyles, backgroundColor: bgColor }}>
        <img
          src={iconSrc}
          alt={altText}
          width="24"
          height="24"
          style={iconStyle}
        />
      </button>
    </Link>
  );
};

export function OAuthButtons() {
  return (
    <section style={containerStyle}>
      <OAuthButton
        href="/api/users/oauth/linkedin"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        bgColor="#0077B5"
        altText="LinkedIn Login"
      />
      <OAuthButton
        href="/api/users/oauth/github"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        bgColor="green"
        altText="GitHub Login"
      />
      <OAuthButton
        href="/api/users/oauth/discord"
        iconSrc="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
        bgColor="#1e2124"
        altText="Discord Login"
      />
      <OAuthButton
        href="/api/users/oauth/google"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
        bgColor="white"
        altText="Google Login"
      />
    </section>
  );
}

export const AfterLogin = () => {
  return (
      <OAuthButtons />
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  marginBottom: '30px'
};

const buttonStyles = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: '12px 0',
  cursor: 'pointer',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '5px',
  transition: 'all 750ms ease-in-out',
};

const iconStyle = {
  marginRight: '8px',
};
