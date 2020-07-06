import React from 'react'
import { useGuestCartLazyQuery } from 'generated/apollo'
import {
  ListItem,
  ListItemText,
  Divider,
  Theme,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Money from 'components/Money'
import useCartId from '../useCartId'
import CartSkeleton from './CartSkeleton'
import CartItem from './CartItem'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    buttonContainer: {
      position: 'sticky',
      bottom: 8,
    },
    button: {
      width: '100%',
    },
  }),
  { name: 'Cart' },
)

export default function Cart() {
  const { cartId } = useCartId()
  const classes = useStyles()
  const [loadCart, { data, loading, called }] = useGuestCartLazyQuery()

  if (cartId && !called) loadCart({ variables: { cartId } })

  if (!cartId || !called) {
    return <CartSkeleton>nothing in your cart</CartSkeleton>
  }

  if (loading || !data) {
    return <CartSkeleton>loading your cart</CartSkeleton>
  }

  const { cart } = data

  return (
    <CartSkeleton badgeContent={cart.total_quantity}>
      {cart.items.map<React.ReactNode>((item) => {
        switch (item.__typename) {
          case 'SimpleCartItem':
            return [
              <CartItem {...item} key={item.id} />,
              <Divider variant='inset' component='li' key={`${item.id}-divider`} />,
            ]
          case 'ConfigurableCartItem':
            return [
              <CartItem {...item} key={item.id} />,
              <Divider variant='inset' component='li' key={`${item.id}-divider`} />,
            ]
        }
        return <div key={item.__typename}>Product type not supported yet {item.__typename}</div>
      })}

      {(cart.shipping_addresses.length > 0 || cart.prices.discounts) && (
        <ListItem>
          <ListItemText inset>Subtotal</ListItemText>
          <ListItemSecondaryAction>
            <Money {...cart.prices.subtotal_including_tax} />
          </ListItemSecondaryAction>
        </ListItem>
      )}

      {cart.prices.discounts?.map((discount, idx) => (
        <ListItem key={idx}>
          <ListItemText inset>{discount.label}</ListItemText>
          <ListItemSecondaryAction>
            <Money {...discount.amount} key={idx} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}

      {cart.shipping_addresses?.map((address, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={idx}>
          <ListItemText inset>{address.selected_shipping_method.carrier_title}</ListItemText>
          <ListItemSecondaryAction>
            <Money {...address.selected_shipping_method.amount} key={idx} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}

      <ListItem>
        <ListItemText inset>Total</ListItemText>
        <ListItemSecondaryAction>
          <Money {...cart.prices.grand_total} />
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem className={classes.buttonContainer}>
        <Button variant='contained' color='primary' size='large' className={classes.button}>
          Proceed to checkout
        </Button>
      </ListItem>
    </CartSkeleton>
  )
}
