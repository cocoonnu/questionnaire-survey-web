export interface QuestionInfoProps {
  title?: string
  desc?: string
  disabled?: boolean
  onChange?: (newProps: QuestionInfoProps) => void
}

export const QuestionInfoDefaultProps: QuestionInfoProps = {
  title: '问卷标题',
  desc: '请输入问卷描述',
}
