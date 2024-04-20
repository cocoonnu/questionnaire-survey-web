export interface QuestionSelectProps {
  title?: string
  options?: {
    value: string
    label: string
  }[]
  selectedValue?: string
  disabled?: boolean
  onChange?: (newProps: QuestionSelectProps) => void
}

export const QuestionSelectDefaultProps: QuestionSelectProps = {
  selectedValue: undefined,
  title: '单选下拉框标题',
  options: [
    { value: '选项1', label: '选项1' },
    { value: '选项2', label: '选项2' },
    { value: '选项3', label: '选项3' },
  ],
}
