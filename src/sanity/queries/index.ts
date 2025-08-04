import { defineQuery } from 'next-sanity'

export const GET_USER_FOR_AUTH =
  defineQuery(`*[_type =='costumer' && email == $email][0]{
  "id": _id,
   userName,
   firstName,
  lastName,
  companyName,
  isGuest,
  password,
    email,
   "avatar": avatarUrl.asset->{
    "url": url,
  },
}`)

export const GET_BLOG_ARTICLE_BY_SLUG =
  defineQuery(`*[_type=='post' && status == 'publish' && slug.current == $slug][0]{
   "id": _id,
  "featuredMedia": {
    "url": featuredMedia.asset -> url,
    "blur": featuredMedia.asset -> metadata.lqip
  },
  excerpt,
  author->{
    name,
    "avatar": {
      "url": avatar.asset -> url,
    "blur": avatar.asset -> metadata.lqip
    }
  },
  "slug": slug.current,
  categories[]->{
    name,
    "id": _id,
    "slug": slug.current,
    "count": count(*[_type == 'post' && status == 'publish' && references(^._id)])
  },
    title,
    date,
    content,
    tags[]->{
    name,
    "id": _id,
    "slug": slug.current,
    "count": count(*[_type == 'post' && status == 'publish' && references(^._id)])
  },
}`)

export const GET_ALL_BLOG =
  defineQuery(`*[_type =='post' && status == 'publish']{
  "id": _id,
"featuredMedia": {
  "url": featuredMedia.asset -> url,
  "blur": featuredMedia.asset -> metadata.lqip
},
excerpt,
author->{
  name,
  "avatar": {
    "url": avatar.asset -> url,
  "blur": avatar.asset -> metadata.lqip
  }
},
"slug": slug.current,
categories[]->{
  name,
  "id": _id,
},
  title,
  date
}`)

export const GET_COSTUMER_BY_ID =
  defineQuery(`*[_type == "costumer" && _id == $customerId][0]{
        _id,
        email,
        firstName,
        lastName,
        userName,
        IdDocument,
        companyName,
        isGuest,
        isPayingCustomer,
        billingAddress[0] {
          address1,
          address2,
          city,
          state,
          postcode
        },
        shippingAddresses[] {
          address1,
          address2,
          city,
          state,
          postcode
        }
      }`)

export const GET_COSTUMER_BY_EMAIL =
  defineQuery(`*[_type == "costumer" && email == $email][0]{
        _id,
        email,
        firstName,
        lastName,
        userName,
        IdDocument,
        companyName,
        isGuest,
        isPayingCustomer,
        billingAddress,
        shippingAddresses
      }`)

export const GET_ORDER_BY_ID = defineQuery(`*[_type =='order' && _id == $id][0]{
  "id": _id,
  purchaseDate,
  status,
  paymentMethod,
  totalAmount,
  "shippingAddress": shippingAddress[0],
  "gateway": paymentMethod,
  discountCoupon->{
    code,
    discount,
    discount_type,
    "id": _id
  },
  "user": userEmail->{
  _id,
  firstName,
  firstName,
  companyName,
  IdDocument,
  email,
  "billingAddress": billingAddress[0],
  },
}`)

export const GET_PRODUCTS_BY_CATEGORY = defineQuery(`*[
  _type == "product" && productCategories[]->slug.current match $type][0] {
  "designs": designs[]->{
    commingSoon,
    "id": _id,
    "slug": slug.current,
    title,
    "offer": ^.offer,
    "price": ^.price,
    "sizes": ^.sizes,
    "colors": formats[0]->color[]{
      "title": name,
      "mainImage": mainImage,
      "images": images[].asset->{
        "url": url,
        "blur": metadata.lqip,
      }
    },
  }
}`)

export const GET_DESIGNS_BY_SEARCH = defineQuery(`*[
  _type == "productDesigns" && title match $search] {
    commingSoon,
    "id": _id,
    "slug": slug.current,
    title,
    "offer": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].offer,
    "price": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].price,
    "sizes": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].sizes,
    "colors": formats[0]->color[]{
      "title": name,
      mainImage,
      "images": images[].asset->{
        "url": url,
        "blur": metadata.lqip,
      }
    },
}`)

export const GET_DESIGNS_BY_SLUG = defineQuery(`*[
  _type == "productDesigns" && slug.current == $slug
][0]{
  "id": _id,
    content,
    excerpt,
    "slug": slug.current,
    title,
    "offer": *[_type == 'product' && designs[]->slug.current match [$slug]][0].offer,
    "price": *[_type == 'product' && designs[]->slug.current match [$slug]][0].price,
    "sizes": *[_type == 'product' && designs[]->slug.current match [$slug]][0].sizes,
    "format": formats[]->{
      title,
      "colors": color[]{
        "title": name,
        mainImage,
        "images": images[].asset->{
          "url": url,
          "blur": metadata.lqip,
        }
      }
    },
}`)

export const GET_COUPONS_FOR_VALIDATION = defineQuery(`*[
  _type == "coupon" && code == $code
][0]{
  "id": _id,
  code,
  discount,
  discount_type,
  expires_at,
  usage_limit,
  usage_count,
  active
}`)

export const GET_DESIGNS_BY_NEW = defineQuery(`*[
  _type == "productDesigns" && isNew == true] {
    commingSoon,
    "id": _id,
    "slug": slug.current,
    title,
    "productCategories":*[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].productCategories[]->{
      name,
      "slug": slug.current
    },
   "offer": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].offer,
    "price": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].price,
    "sizes": *[_type == 'product' && designs[]->slug.current match [^.slug.current]][0].sizes,
    "colors": formats[0]->color[]{
      "title": name,
      mainImage,
      "images": images[].asset->{
        "url": url,
        "blur": metadata.lqip,
      }
  }
}`)

export const GET_USER_PROFILE_WITH_ORDERS =
  defineQuery(`*[_type == "costumer" && _id == $customerId][0]{
  "id": _id,
  firstName,
  lastName,
  _createdAt,
  "avatar": avatarUrl.asset->{
    "url": url,
    "blur": metadata.lqip
  },
  billingAddress[0] {
    address1,
    address2,
    city,
    state,
    postcode
  },
  shippingAddresses[] {
    address1,
    address2,
    city,
    state,
    postcode
  },
  "orders": *[_type == "order" && userEmail._ref == ^._id] | order(purchaseDate desc) {
    "id": _id,
    purchaseDate,
    status,
    paymentMethod,
    totalAmount,
    "shippingAddress": shippingAddress[0],
    discountCoupon->{
      code,
      discount,
      discount_type,
      "id": _id
    },
    products[] {
      quantity,
      format,
      color,
      product->{
        "id": _id,
        title,
        "slug": slug.current,
        "featuredMedia": formats[0]->color[0].images[0].asset->{
          "url": url,
          "blur": metadata.lqip
        }
      }
    }
  }
}`)

export const GET_LEGAL_PAGE_BY_SLUG = defineQuery(`*[
  _type == "legalPages" && slug == $slug
][0]{
  "id": _id,
  slug,
  content,
  excerpt
}`)

export const GET_SHIPPING_CONFIG = defineQuery(`*[
  _type == "shipping" && isActive == true
][0]{
  "id": _id,
  title,
  amount,
  freeCartTotal,
  isActive
}`)
