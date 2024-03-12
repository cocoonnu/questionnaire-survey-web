export interface QuestionTitleProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
  disabled?: boolean
  onChange?: (newProps: QuestionTitleProps) => void
}

export const QuestionTitleDefaultProps: QuestionTitleProps = {
  text: '问卷标题',
  level: 1,
  isCenter: false,
}
