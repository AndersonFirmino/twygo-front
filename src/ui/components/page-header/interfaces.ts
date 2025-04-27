export interface PageHeaderProps {
  title: string
  actionButton?: {
    label: string
    onClick: () => void
  }
  secondaryButton?: {
    label: string
    onClick: () => void
  }
}
