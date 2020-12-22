// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const AvailablePaymentMethodFragmentDoc: DocumentNode<
  AvailablePaymentMethodFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AvailablePaymentMethod' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AvailablePaymentMethod' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
}
export type AvailablePaymentMethodFragment = Pick<Types.AvailablePaymentMethod, 'code' | 'title'>