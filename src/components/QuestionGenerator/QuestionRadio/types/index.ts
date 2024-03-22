export interface QuestionRadioProps {
  title?: string
  isVertical?: boolean
  options?: {
    value: string
    label: string
  }[]
  selectedValue?: string
  disabled?: boolean
  onChange?: (newProps: QuestionRadioProps) => void
}

export const QuestionRadioDefaultProps: QuestionRadioProps = {
  selectedValue: undefined,
  title: '单选框标题',
  isVertical: false,
  options: [
    { value: '选项1', label: '选项1' },
    { value: '选项2', label: '选项2' },
    { value: '选项3', label: '选项3' },
  ],
}
