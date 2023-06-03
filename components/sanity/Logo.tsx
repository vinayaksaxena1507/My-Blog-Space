import Image from 'next/image'
import brandLogo from '@/public/Tim-logo-white.png'

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        width={64}
        height={64}
        src={brandLogo}
        alt="brand logo"
      ></Image>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
export default Logo
