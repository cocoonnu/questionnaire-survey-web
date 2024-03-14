export interface QuestionInputProps {
  title?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (newProps: QuestionInputProps) => void
}

export const QuestionInputDefaultProps: QuestionInputProps = {
  title: '单行输入框标题',
  placeholder: '请输入题目描述...',
}
