// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const GetProductStaticPathsDocument: DocumentNode<
  GetProductStaticPathsQuery,
  GetProductStaticPathsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductStaticPaths' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'ObjectValue', fields: [] },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: { kind: 'IntValue', value: '1000' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currentPage' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'current_page' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total_count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url_key' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type GetProductStaticPathsQueryVariables = Types.Exact<{
  currentPage: Types.Scalars['Int']
}>

export type GetProductStaticPathsQuery = {
  products?: Types.Maybe<
    Pick<Types.Products, 'total_count'> & {
      page_info?: Types.Maybe<Pick<Types.SearchResultPageInfo, 'current_page' | 'total_pages'>>
      items?: Types.Maybe<
        Array<
          Types.Maybe<
            | Pick<Types.VirtualProduct, 'url_key'>
            | Pick<Types.SimpleProduct, 'url_key'>
            | Pick<Types.DownloadableProduct, 'url_key'>
            | Pick<Types.BundleProduct, 'url_key'>
            | Pick<Types.GroupedProduct, 'url_key'>
            | Pick<Types.ConfigurableProduct, 'url_key'>
          >
        >
      >
    }
  >
}