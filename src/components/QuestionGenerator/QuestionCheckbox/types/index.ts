export interface OptionType {
  value: string
  text: string
}

export interface QuestionCheckboxProps {
  title?: string
  isVertical?: boolean
  options?: OptionType[]
  selectedValue?: string[]
  disabled?: boolean
  onChange?: (newProps: QuestionCheckboxProps) => void
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxProps = {
  selectedValue: ['item1', 'item2'],
  title: '多选框标题',
  isVertical: false,
  options: [
    { value: 'item1', text: '选项1' },
    { value: 'item2', text: '选项2' },
    { value: 'item3', text: '选项3' },
  ],
}
