export interface QuestionTitleProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
  onChange?: (newProps: QuestionTitleProps) => void
  disabled?: boolean
}

export const QuestionTitleDefaultProps: QuestionTitleProps = {
  text: '一行标题',
  level: 1,
  isCenter: false,
}
