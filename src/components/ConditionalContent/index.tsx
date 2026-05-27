import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { ReactNode } from "react"

type Vendors = 'main' | 'secondary' 

const conContent = ({forVendor}: {forVendor: Vendors}): ReactNode => {
    const { vendor } = useDocusaurusContext().siteConfig.customFields.vendor
    
    if (vendor)

    return (
        <>
        </>
    )
}

export default conContent;