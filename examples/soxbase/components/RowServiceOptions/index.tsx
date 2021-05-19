import RichText from '@reachdigital/graphcms-ui/RichText'
import IconBlocks from '@reachdigital/next-ui/Row/IconBlocks'
import IconBlock from '@reachdigital/next-ui/Row/IconBlocks/IconBlock'
import SvgImage from '@reachdigital/next-ui/SvgImage'
import { iconChat, iconEmail, iconPhone } from '@reachdigital/next-ui/icons'
import PageLink from 'next/link'
import React from 'react'
import { RowServiceOptionsFragment } from './RowServiceOptions.gql'

type RowServiceOptionsProps = RowServiceOptionsFragment

export default function RowServiceOptions(props: RowServiceOptionsProps) {
  const { title, serviceOptions } = props

  return (
    <IconBlocks
      title={title}
      options={serviceOptions.map((serviceOption) => {
        const iconTitle = serviceOption.title.toLowerCase()

        return (
          <PageLink key={serviceOption.title} href={serviceOption.url} passHref>
            <IconBlock
              title={serviceOption.title}
              icon={
                <>
                  {iconTitle === 'e-mail' && (
                    <SvgImage src={iconEmail} alt='phone' loading='eager' />
                  )}
                  {iconTitle === 'phone' && (
                    <SvgImage src={iconPhone} alt='phone' loading='eager' />
                  )}
                  {iconTitle === 'chat' && <SvgImage src={iconChat} alt='phone' loading='eager' />}
                </>
              }
            >
              {serviceOption.description ? <RichText {...serviceOption.description} /> : undefined}
            </IconBlock>
          </PageLink>
        )
      })}
    />
  )
}
