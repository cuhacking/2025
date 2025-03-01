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
        href="/api/users/oauth/google"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
        bgColor="#000"
        altText="Google Login"
      />
    </section>
  );
}

export const AfterLogin = () => {
  return (
    <>
      <OAuthButtons />
      <section>
        Welcome to the admin panel of cuHacking's{' '}
        <span className="text-yellow-400">2025</span>{' '}
        <span className="text-orange-400">Platform</span>, built with{' '}
        <Link
          className="text-primary"
          href="https://docs.cuhacking.ca/tech-stack"
          target="_blank"
        >
          Axiom
        </Link>
        , our very own in-house meta-framework.
        <p>This project is a work in progress :)</p>
      </section>
    </>
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
};

const iconStyle = {
  marginRight: '8px',
};
