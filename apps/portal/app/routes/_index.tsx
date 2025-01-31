export default function Index() {
  const links = ['github']

  return (
    <div>
      <h1>Social Links</h1>
      <ul>
        {links.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  )
}
