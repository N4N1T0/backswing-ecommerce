import { type SchemaTypeDefinition } from 'sanity'

//* TYPES
import { pageType } from './PageType'
import { authorType } from './AuthorType'
import { categoryType } from './CategoryType'
import { externalImageType } from './ExternalImageType'
import { postType } from './PostType'
import { tagType } from './TagType'
import { productType } from './ProductsType'
import { productCategoryType } from './ProductCategoryType'
import { productTagType } from './ProductTagType'
import { couponsType } from './CouponsTypes'
import { subscriberNewsletterType } from './SubscriberNewsletterType'
import { homePageType } from './HomePageType'
import { brandType } from './BrandType'
import { costumerType } from './CostumerType'
import { addressType } from './AddressType'
import { link } from './LinkType'
import { productVariantType } from './ProductVariantType'
import { noStockNotifyMeType } from './NoStockNotifyMeType'
import { offerPageType } from './OfferPageType'
import { featureFlagsType } from './FeatureFlags'
import { orderType } from './OrderType'
import { abandonedCartType } from './AbandonedCartType'
import { wishlistType } from './WishlistType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    authorType,
    categoryType,
    externalImageType,
    postType,
    tagType,
    productType,
    productCategoryType,
    productTagType,
    couponsType,
    subscriberNewsletterType,
    homePageType,
    brandType,
    costumerType,
    addressType,
    link,
    productVariantType,
    noStockNotifyMeType,
    offerPageType,
    featureFlagsType,
    abandonedCartType,
    orderType,
    wishlistType
  ]
}
