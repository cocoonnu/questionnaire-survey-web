export interface QuestionParagraphProps {
  text?: string
  isCenter?: boolean
  disabled?: boolean
  onChange?: (newProps: QuestionParagraphProps) => void
}

export const QuestionParagraphDefaultProps: QuestionParagraphProps = {
  text: '请输入问卷描述...',
  isCenter: false,
}
