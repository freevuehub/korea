import { computed } from '@vue/composition-api'

interface IProps {
  markdown: string
}

export const useComputed = (props: IProps) => ({
  tree: computed(() => {
    const titleReg = /(#+)\s?(.+)/
    const dividerReg = /-{3}/
    const listReg = /-\s?(.+)/
    const contents = props.markdown
      .split(/\n/)
      .filter((string: string) => !!string)
      .map((string: string) => {
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
      })

    return contents
  }),
})
