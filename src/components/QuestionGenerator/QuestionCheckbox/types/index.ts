export interface QuestionCheckboxProps {
  title?: string
  isVertical?: boolean
  options?: {
    value: string
    label: string
  }[]
  selectedValue?: string[]
  disabled?: boolean
  onChange?: (newProps: QuestionCheckboxProps) => void
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxProps = {
  selectedValue: [],
  title: '多选框标题',
  isVertical: true,
  options: [
    { value: '选项1', label: '选项1' },
    { value: '选项2', label: '选项2' },
    { value: '选项3', label: '选项3' },
  ],
}
