import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import logoBlack from '../../../../../payloadcms_public/logo-black.svg'
import Image from 'next/image'

const HeaderComponent = ({header} : {header: Header}) => {
  return (
    <nav>
        <Gutter>
            <Link href='/'>
                <Image src={logoBlack} alt='logo'/>
            </Link>
        </Gutter>
    </nav>
  )
}

export default HeaderComponent