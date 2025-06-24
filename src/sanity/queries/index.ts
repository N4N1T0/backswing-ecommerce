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
