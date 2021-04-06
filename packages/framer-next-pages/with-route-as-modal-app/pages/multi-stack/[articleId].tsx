/* eslint-disable @typescript-eslint/require-await */
import { PageOptions } from '@reachdigital/framer-next-pages'
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import React from 'react'
import Grid, { data } from '../../components/Grid'
import StackDebug from '../../components/StackedDebugger'
import StackedDrawer from '../../components/StackedDrawer'

function ArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { articleId } = props

  return (
    <StackedDrawer variant='right'>
      <StackDebug />
      <div style={{ padding: 20, paddingLeft: 60 }}>
        <h1>Multi Stack {articleId}</h1>
        <Grid />
      </div>
    </StackedDrawer>
  )
}

ArticlePage.pageOptions = { stack: 'right' } as PageOptions

export default ArticlePage

type ParsedUrlQuery = { articleId: string }
export async function getStaticPaths(): Promise<GetStaticPathsResult<ParsedUrlQuery>> {
  return {
    paths: data.map((articleId) => ({ params: { articleId: articleId.toString() } })),
    fallback: false,
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext<ParsedUrlQuery>) {
  return {
    props: ctx.params,
  }
}
