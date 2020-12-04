import { computed } from '@vue/composition-api'

interface IProps {
  markdown: string
}

interface IDomTree {
  component: string
  value?: string
  tree?: IDomTree[]
}

const titleReg = /(#+)\s?(.+)/
const dividerReg = /-{3}/
const listReg = /-\s?(.+)/

const contentsFilter = (string: string) => !!string
const mdOfDom = (string: string) => {
  if (titleReg.test(string)) {
    const [, tag, value] = titleReg.exec(string) || ['', '', '']

    return { component: `h${tag.length}`, value }
  } else if (dividerReg.test(string)) {
    return { component: 'hr' }
  } else if (listReg.test(string)) {
    const [, value] = listReg.exec(string) || ['', '']

    return { component: 'li', value }
  }

  return { component: 'p', value: string }
}
const domReduce = (prev: IDomTree[], cur: IDomTree) => {
  switch (cur.component) {
    case 'li':
      if (prev[prev.length - 1].component === 'ul') {
        prev[prev.length - 1].tree?.push(cur)

        return prev
      }

      return [...prev, { component: 'ul', tree: [cur] }]
    case 'code':
      return [...prev]
    default:
      return [...prev, cur]
  }
}

export const useComputed = (props: IProps) => ({
  tree: computed(() => {
    const contents = props.markdown.split(/\n/)

    return contents.filter(contentsFilter).map(mdOfDom).reduce(domReduce, [])
  }),
})
