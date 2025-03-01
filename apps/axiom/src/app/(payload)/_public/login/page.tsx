import Link from 'next/link';

const OAuthProviders = [
  {
    name: "LinkedIn",
    url: "/api/users/oauth/linkedin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    bgColor: "skyblue",
  },
  {
    name: "Google",
    url: "/api/users/oauth/google",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    bgColor: "grey",
  },
  {
    name: "GitHub",
    url: "/api/users/oauth/github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    bgColor: "green",
  },
  {
    name: "Discord",
    url: "/api/users/oauth/discord",
    icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg",
    bgColor: "#E0E3FF",
  },
];

const OAuthButton = ({ href, icon, bgColor, name }) => (
  <Link href={href} style={{ width: '100%' }}>
    <button style={{ ...buttonStyles, backgroundColor: bgColor }}>
      <img src={icon} alt={`${name} logo`} width="24" height="24" style={iconStyle} />
      {/* {name} */}
    </button>
  </Link>
);

const OAuthButtons = () => (
  <section style={containerStyle}>
    {OAuthProviders.map(({ name, url, icon, bgColor }) => (
      <OAuthButton key={name} href={url} icon={icon} bgColor={bgColor} name={name} />
    ))}
  </section>
);

export default function Login() {
  return (
    <div style={loginContainerStyle}>
      <OAuthButtons />
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
};

const loginContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '20%',
  margin: 'auto',
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
  gap: '10px',
};

const iconStyle = { marginRight: '8px' };
