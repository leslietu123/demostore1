// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../generated/types'

import { PageLinkFragment, PageLinkFragmentDoc } from '../PageLink/PageLink.gql'

export const RowProductGridFragmentDoc: DocumentNode<RowProductGridFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RowProductGrid' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RowProductGrid' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLinks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageLink' } }],
            },
          },
        ],
      },
    },
    ...PageLinkFragmentDoc.definitions,
  ],
}
export type RowProductGridFragment = Pick<Types.RowProductGrid, 'title'> & {
  pageLinks: Array<PageLinkFragment>
}