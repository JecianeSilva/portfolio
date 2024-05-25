import Link from "next/link"
import Image from "next/image"

import gitSVG from "@/assets/icons/git.svg"
import linkdInSVG from "@/assets/icons/linkeding.svg"
import instagramSVG from "@/assets/icons/instagram.svg"
import wppSVG from "@/assets/icons/whatsapp.svg"

interface SocialMediaProps { }

export function SocialMedia({ ...rest }: SocialMediaProps) {
  const listSocialMedia = [
    { id: 1, alt: "GitHub", href: "https://github.com/jecianeSilva", icon: gitSVG },
    { id: 2, alt: "Linkedin", href: "https://www.linkedin.com/in/jeciane-amorim-056513184/", icon: linkdInSVG },
    { id: 3, alt: "Instagram", href: "https://www.instagram.com/jeciane.dev", icon: instagramSVG },
    { id: 4, alt: "WhatsApp", href: "", icon: wppSVG }
  ]
  return (
    <div className="flex w-[70%] justify-between mt-12 w-full"{...rest}>
      {listSocialMedia.map((item => {
        return (
          <div key={item.id}>
            <Link className="" href={item.href}>
              <Image src={item.icon} alt={item.alt} width={38} height={38} />
            </Link>
          </div>
        )
      }))}
    </div>
  )
}
