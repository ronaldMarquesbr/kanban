import { ProgressBarContainer, ProgressBarIndicator } from './styles'

interface ProgressBarProps {
  fullProgress: number
  currentProgress: number
}

export function ProgressBar({
  fullProgress,
  currentProgress,
}: ProgressBarProps) {
  return (
    <ProgressBarContainer max={fullProgress} value={currentProgress}>
      <ProgressBarIndicator
        style={{ width: `${(currentProgress / fullProgress) * 100}%` }}
      />
    </ProgressBarContainer>
  )
}
