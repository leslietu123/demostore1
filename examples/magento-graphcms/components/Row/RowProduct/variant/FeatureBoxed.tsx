import RichText from '@graphcommerce/graphcms-ui/RichText'
import { Image } from '@graphcommerce/image'
import { ImageTextBoxed, typography, withStyles } from '@graphcommerce/next-ui'
import { Typography, useTheme } from '@mui/material'
import { RowProductFragment } from '../RowProduct.gql'
import { ProductFeatureMediaBoxedFragment } from './ProductFeatureMediaBoxed.gql'

type FeatureBoxedProps = RowProductFragment & ProductFeatureMediaBoxedFragment

const RichTextFeatureBoxed = withStyles(RichText, (theme) => ({
  h2: { ...typography(theme, 'h1') },
  paragraph: { ...typography(theme, 'subtitle1') },
}))

export default function FeatureBoxed(props: FeatureBoxedProps) {
  const { productCopy, title, media_gallery } = props
  const item = media_gallery?.[1] ?? media_gallery?.[0]
  const theme = useTheme()

  if (!item) return null

  return (
    <ImageTextBoxed
      item={
        item.__typename === 'ProductImage' &&
        item.url && (
          <Image
            alt={item.label ?? ''}
            width={1532}
            height={1678}
            src={item.url}
            sizes={{
              0: '100vw',
              [theme.breakpoints.values.md]: '50vw',
            }}
          />
        )
      }
    >
      {title && (
        <Typography variant='overline' color='textSecondary'>
          {title}
        </Typography>
      )}
      {productCopy?.raw && <RichTextFeatureBoxed {...productCopy} />}
    </ImageTextBoxed>
  )
}
