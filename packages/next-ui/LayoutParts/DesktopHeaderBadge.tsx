import { Badge, BadgeProps } from '@mui/material'

/** Note: This should _only_ be used on the Desktop, use a standard Badge for other usecases. */
export function DesktopHeaderBadge(props: BadgeProps) {
  const { sx = false } = props
  return (
    <Badge
      {...props}
      sx={[
        {
          '& .MuiBadge-colorError': {
            bgcolor: 'text.disabled',
          },
          '& .MuiBadge-anchorOriginTopRightCircular': {
            right: { xs: '3px', md: '8px' },
            top: { xs: '3px', md: '8px' },
          },
          '& .MuiBadge-badge': {
            typography: 'caption',
            borderRadius: '100%',
            padding: { xs: '3px', md: '6px' },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  )
}
