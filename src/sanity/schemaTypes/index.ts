import { type SchemaTypeDefinition } from 'sanity'

//* TYPES
import { abandonedCartType } from './AbandonedCartType'
import { addressType } from './AddressType'
import { authorType } from './AuthorType'
import { costumerType } from './CostumerType'
import { couponsType } from './CouponsTypes'
import { DesignsType } from './DesignsTypes'
import { externalImageType } from './ExternalImageType'
import { featureFlagsType } from './FeatureFlags'
import { formatTypes } from './FormatTypes'
import { legalPageType } from './LegalPageTypes'
import { link } from './LinkType'
import { noStockNotifyMeType } from './NoStockNotifyMeType'
import { orderType } from './OrderType'
import { postType } from './PostType'
import { productCategoryType } from './ProductCategoryType'
import { productType } from './ProductsType'
import { subscriberNewsletterType } from './SubscriberNewsletterType'
import { tagType } from './TagType'
import { wishlistType } from './WishlistType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    authorType,
    externalImageType,
    postType,
    tagType,
    productType,
    productCategoryType,
    couponsType,
    subscriberNewsletterType,
    costumerType,
    addressType,
    link,
    DesignsType,
    noStockNotifyMeType,
    featureFlagsType,
    abandonedCartType,
    orderType,
    wishlistType,
    formatTypes,
    legalPageType
  ]
}
