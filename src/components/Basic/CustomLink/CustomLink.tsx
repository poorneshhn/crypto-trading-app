import type { FC } from "react"
import { Link, type LinkProps } from "react-router-dom"
import clsx from "clsx";

const CustomLink: FC<LinkProps> = ({children, className, ...rest}) => {
  return (
    <Link {...rest} className={clsx(className, "")}>{children}</Link>
  )
}

export default CustomLink;