function MobileNavItem({ link, name }) {
  return (
    <div className="p-2.5">
      <a href={link} className="block" aria-label={`Navigate to ${name}`}>
        <h2 className="text-[48px] font-extrabold">
          {name}
        </h2>
      </a>
    </div>
  )
}

export default MobileNavItem
