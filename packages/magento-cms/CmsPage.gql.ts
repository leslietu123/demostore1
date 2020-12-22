// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const CmsPageDocument: DocumentNode<CmsPageQuery, CmsPageQueryVariables> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CmsPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'urlKey' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cmsPage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'identifier' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'urlKey' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                { kind: 'Field', name: { kind: 'Name', value: 'meta_title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'meta_description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content_heading' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type CmsPageQueryVariables = Types.Exact<{
  urlKey: Types.Scalars['String']
}>

export type CmsPageQuery = {
  cmsPage?: Types.Maybe<
    Pick<
      Types.CmsPage,
      'identifier' | 'meta_title' | 'meta_description' | 'title' | 'content_heading' | 'content'
    >
  >
}