import React, { Children } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import RowColumnTwo, { RowColumnTwoProps } from '.'
import { Node, isElementNode, isTextNode } from '../RichText'

const useStyles = makeStyles(
  ({ breakpoints }: Theme) => ({
    root: {
      [breakpoints.up('md')]: {
        gridTemplateColumns: `1fr 1fr 1fr`,
        gridTemplateAreas: (props: RowColumnTwoProps) =>
          getNodeLength(props.colOne.raw) >= getNodeLength(props.colTwo.raw)
            ? `"one one two"`
            : `"one two two"`,
      },
    },
  }),
  { name: 'RowColumnTwoSpread' },
)

const useRichTextOne = makeStyles(({ gridSpacing, breakpoints }: Theme) => ({
  paragraph: {
    [breakpoints.up('md')]: {
      columnCount: (props: RowColumnTwoProps) => getColumnCount(props, 1),
      columnGap: gridSpacing.column,
    },
  },
}))

const useRichTextTwo = makeStyles(({ gridSpacing, breakpoints }: Theme) => ({
  paragraph: {
    [breakpoints.up('md')]: {
      columnCount: (props: RowColumnTwoProps) => getColumnCount(props, 2),
      columnGap: gridSpacing.column,
    },
  },
}))

function getNodeLength(node: Node): number {
  if (isElementNode(node))
    return node.children.map(getNodeLength).reduce<number>((prev, curr) => prev + curr, 0)

  if (isTextNode(node)) return node.text.length
  return 0
}

const getColumnCount = (props: RowColumnTwoProps, columnId: Number) => {
  const colOneLength = getNodeLength(props.colOne.raw)
  const colTwoLength = getNodeLength(props.colTwo.raw)

  if (colOneLength >= colTwoLength && columnId === 1) return 2
  if (colOneLength >= colTwoLength && columnId === 2) return 1
  if (colOneLength < colTwoLength && columnId === 1) return 1
  if (colOneLength < colTwoLength && columnId === 2) return 2
}

const RowColumnTwoSpread: React.FC<RowColumnTwoProps> = (props) => {
  const classes = useStyles(props)
  const richTextTwoClasses = useRichTextTwo(props)
  const richTextOneClasses = useRichTextOne(props)

  return (
    <RowColumnTwo
      {...props}
      classes={classes}
      richTextOneClasses={richTextOneClasses}
      richTextTwoClasses={richTextTwoClasses}
    />
  )
}

export default RowColumnTwoSpread
