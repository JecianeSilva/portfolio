import { LiHTMLAttributes } from "react";
import { IconProps } from "phosphor-react";
import Link from "next/link"

interface SocialMediaProps {
  id: number;
  href: string;
  icon: React.FC<IconProps>;
}
interface SocialMediaComponentProps extends LiHTMLAttributes<HTMLLIElement> {
  listSocialMedia: SocialMediaProps;
}

export function SocialMedia({ listSocialMedia, ...rest }: SocialMediaComponentProps) {
  const { icon: Icon, href } = listSocialMedia;
  return (
    <li className="flex items-center rounded-full p-2 bg-dark transition hover:bg-sky-900" {...rest}>
      <Link href={href} >
        <Icon size={24} weight="regular" className="fill-white" />
      </Link>
    </li>
  )
}
