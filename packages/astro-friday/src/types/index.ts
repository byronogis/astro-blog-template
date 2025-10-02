export interface NavItem {
  label: string
  link: string
  icon?: string
  /**
   * Whether the link is external (opens in a new tab)
   *
   * @default false
   */
  external?: boolean
  /**
   * Control the order of the navigation items
   *
   * Larger numbers appear first
   *
   * @default 0
   */
  order?: number
}
