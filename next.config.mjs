import nextMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';


// import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
})



