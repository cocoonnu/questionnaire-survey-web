export interface QuestionInputProps {
  title?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (newProps: QuestionInputProps) => void
}

export const QuestionInputDefaultProps: QuestionInputProps = {
  title: '请输入题目标题',
  placeholder: '请输入...',
}
