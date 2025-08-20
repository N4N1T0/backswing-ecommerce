import { socialUrgencyMessages, socialUrgencyTypes } from '@/contants'

export interface SocialUrgencyBadge {
  type: string
  message: string
  count?: number
  variant: 'primary' | 'secondary' | 'accent'
}

/**
 * Generates a random social urgency badge for a product
 * @param productId - The product ID to generate consistent data
 * @returns SocialUrgencyBadge or null if no badge should be shown
 */
export function generateSocialUrgencyBadge(
  productId: string
): SocialUrgencyBadge | null {
  // Use product ID to create consistent randomness
  const seed = productId
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const random = ((seed * 9301 + 49297) % 233280) / 233280

  // 70% chance to show a badge
  if (random < 0.3) return null

  const urgencyTypes = Object.values(socialUrgencyTypes)
  const typeIndex = Math.floor(random * urgencyTypes.length)
  const selectedType = urgencyTypes[typeIndex]

  const messageData = socialUrgencyMessages.find(
    (msg) => msg.type === selectedType
  )
  if (!messageData) return null

  let badge: SocialUrgencyBadge

  switch (selectedType) {
    case socialUrgencyTypes.POPULAR:
      badge = {
        type: selectedType,
        message: messageData.message,
        variant: 'accent'
      }
      break

    case socialUrgencyTypes.TRENDING:
      badge = {
        type: selectedType,
        message: messageData.message,
        variant: 'accent'
      }
      break

    case socialUrgencyTypes.BESTSELLER:
      badge = {
        type: selectedType,
        message: messageData.message,
        variant: 'primary'
      }
      break

    case socialUrgencyTypes.CART:
    case socialUrgencyTypes.WISHLIST:
    case socialUrgencyTypes.VIEWS:
      // Generate count between 2-15 for these types
      const count = Math.floor(random * 14 + 2)
      badge = {
        type: selectedType,
        message: `${count} ${messageData.message}`,
        count,
        variant: 'secondary'
      }
      break

    default:
      return null
  }

  return badge
}

/**
 * Gets the appropriate CSS classes for the badge variant
 * @param variant - The badge variant
 * @returns CSS class string
 */
export function getBadgeVariantClasses(
  variant: SocialUrgencyBadge['variant']
): string {
  switch (variant) {
    case 'primary':
      return 'bg-blue-500 text-white'
    case 'secondary':
      return 'bg-gray-800 text-white'
    case 'accent':
      return 'bg-orange-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}
