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

export const GET_COSTUMER_BY_ID =
  defineQuery(`*[_type == "customer" && _id == $customerId][0]{
        _id,
        email,
        firstName,
        lastName,
        userName,
        IdDocument,
        companyName,
        isGuest,
        isPayingCustomer,
        billingAddress {
          street,
          apartment,
          city,
          state,
          zipCode
        },
        shippingAddresses[] {
          street,
          apartment,
          city,
          state,
          zipCode
        }
      }`)

export const GET_PRODUCTS_BY_CATEGORY = defineQuery(`*[
  _type == "product" && productCategories[]->slug.current match $type][0] {
  "designs": designs[]->{
    "id": _id,
    "slug": slug.current,
    title,
    "offer": ^.offer,
    "price": ^.price,
    "sizes": ^.sizes,
    "colors": formats[0]->color[]{
      "title": name,
      "images": images[].asset->{
        "url": url,
        "blur": metadata.lqip,
      }
    },
  }
}`)

export const GET_DESIGNS_BY_SLUG = defineQuery(`*[
  _type == "productDesigns" && slug.current == $slug
][0]{
  "id": _id,
    content,
    excerpt,
    "slug": slug.current,
    title,
    "offer": *[_type == 'product' && count(designs[]->slug.current[@ == $slug]) > 0][0].offer,
    "price": *[_type == 'product' && count(designs[]->slug.current[@ == $slug]) > 0][0].price,
    "sizes": *[_type == 'product' && count(designs[]->slug.current[@ == $slug]) > 0][0].sizes,
    "format": formats[]->{
      title,
      "colors": color[]{
        "title": name,
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
