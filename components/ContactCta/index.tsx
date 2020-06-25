import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { Link } from '@material-ui/core'
import useContactCtaStyles from './useContactCtaStyles'

const ContactCta: React.FC<GQLRowHeroFragment> = ({ contactPeople }) => {
  const classes = useContactCtaStyles()

  return (
    contactPeople && (
      <div className={classes.root}>
        <div className={classes.persons}>
          <AvatarGroup classes={{ avatar: classes.avatarGroup }}>
            {contactPeople.map((person) => {
              return (
                <Avatar
                  key={person.id}
                  alt={person.name}
                  src={person.avatar.url}
                  className={classes.avatar}
                />
              )
            })}
          </AvatarGroup>
        </div>
        <span className={classes.ctaMessage}>
          <span>Even sparren?</span>{' '}
          <strong>
            <Link href='tel:0717440084' color='inherit'>
              071 - 744 0084
            </Link>
          </strong>
        </span>
      </div>
    )
  )
}

export default ContactCta