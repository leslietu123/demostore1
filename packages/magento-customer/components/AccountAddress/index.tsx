import { Link, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import AddressMultiLine from '../AddressMultiLine'
import DeleteCustomerAddressForm from '../DeleteCustomerAddressForm'
import UpdateDefaultAddressForm from '../UpdateDefaultAddressForm'
import { AccountAddressFragment } from './AccountAddress.gql'

export type AccountAddressProps = AccountAddressFragment

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacings.md,
      paddingBottom: theme.spacings.md,
      ...theme.typography.body2,
    },
    address: {
      '& > span': {
        display: 'block',
      },
    },
    switches: {
      paddingTop: theme.spacings.xxs,
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      textAlign: 'right',
    },
  }),
  { name: 'AccountAddress' },
)

export default function AccountAddress(props: AccountAddressProps) {
  const { id } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.address}>
        <AddressMultiLine {...props} />

        <div className={classes.switches}>
          <UpdateDefaultAddressForm {...props} />
        </div>
      </div>
      <div className={classes.actions}>
        <Link color='primary' href={`/account/addresses/edit?addressId=${id}`}>
          Edit
        </Link>
        <DeleteCustomerAddressForm addressId={id ?? undefined} />
      </div>
    </div>
  )
}