import { WishlistItem, WishlistItemProps } from './WishlistItem'
import { WishlistItemFragment } from './WishlistItem.gql'
import { WishlistItemConfigurableFragment } from './WishlistItemConfigurable.gql'

export function WishlistItemConfigurable(
  props: WishlistItemConfigurableFragment & WishlistItemProps,
) {
  const { configurable_options, ...wishlistItemProps } = props

  return <WishlistItem {...wishlistItemProps} />
}
