import { Button, FormControl, FormHelperText } from '@material-ui/core'
import { useMutationForm } from '@reachdigital/next-ui/useMutationForm'
import { useRouter } from 'next/router'
import { SignOutDocument } from './SignOut.gql'

type SignOutFormProps = Omit<JSX.IntrinsicElements['form'], 'onSubmit' | 'noValidate'>

export default function SignOutForm(props: SignOutFormProps) {
  const router = useRouter()
  const { handleSubmit, formState, errors } = useMutationForm(SignOutDocument, {
    onComplete: () => router.back(),
  })

  return (
    <form onSubmit={handleSubmit} noValidate {...props}>
      <FormControl>
        <Button type='submit' disabled={formState.isSubmitting} color='primary'>
          Sign out
        </Button>
        <FormHelperText error={!!errors.submission?.message}>
          {errors.submission?.message}
        </FormHelperText>
      </FormControl>
    </form>
  )
}