// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import { MoneyFragment, MoneyFragmentDoc } from '../magento-store/Money.gql'

export const ProductPagePriceFragmentDoc: DocumentNode<ProductPagePriceFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductPagePrice' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductPrice' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'regular_price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'discount' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount_off' } },
                { kind: 'Field', name: { kind: 'Name', value: 'percent_off' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'final_price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fixed_product_taxes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'amount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
              ],
            },
          },
        ],
      },
    },
    ...MoneyFragmentDoc.definitions,
  ],
}
export type ProductPagePriceFragment = {
  regular_price: MoneyFragment
  discount?: Types.Maybe<Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>>
  final_price: MoneyFragment
  fixed_product_taxes?: Types.Maybe<
    Array<
      Types.Maybe<Pick<Types.FixedProductTax, 'label'> & { amount?: Types.Maybe<MoneyFragment> }>
    >
  >
}