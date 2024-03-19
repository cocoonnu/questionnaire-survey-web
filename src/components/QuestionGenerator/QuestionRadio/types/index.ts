export interface OptionType {
  value: string
  text: string
}

export interface QuestionRadioProps {
  title?: string
  isVertical?: boolean
  options?: OptionType[]
  selectedValue?: string
  disabled?: boolean
  onChange?: (newProps: QuestionRadioProps) => void
}

export const QuestionRadioDefaultProps: QuestionRadioProps = {
  selectedValue: undefined,
  title: '单选框标题',
  isVertical: false,
  options: [
    { value: 'item1', text: '选项1' },
    { value: 'item2', text: '选项2' },
    { value: 'item3', text: '选项3' },
  ],
}
