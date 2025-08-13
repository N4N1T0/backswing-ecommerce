import type { StructureResolver } from 'sanity/structure'

// Assets Icons
import {
  BadgeEuro,
  BaggageClaim,
  BarChart,
  Bell,
  BookOpen,
  BookOpenText,
  CircleDollarSign,
  Filter,
  Heart,
  Paintbrush,
  ShoppingBasket,
  Sparkle,
  StickyNote,
  Tag,
  Truck,
  User,
  UserPen,
  UserRoundPen
} from 'lucide-react'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Backswing CMS')
    .items([
      S.listItem()
        .title('Contenido')
        .icon(() => <BookOpen className='size-4' />)
        .child(
          S.list()
            .title('Contenido del Sitio')
            .items([
              S.documentTypeListItem('legalPages')
                .title('Paginas Legales')
                .icon(() => <BookOpenText className='size-4' />),
              S.divider(),
              S.documentTypeListItem('post')
                .title('Entradas')
                .icon(() => <StickyNote className='size-4' />),
              S.documentTypeListItem('author')
                .title('Autores')
                .icon(() => <UserRoundPen className='size-4' />),
              S.documentTypeListItem('tag')
                .title('Etiquetas')
                .icon(() => <Tag className='size-4' />),
              S.documentTypeListItem('subscriberNewsletter')
                .title('Suscriptores')
                .icon(() => <UserPen className='size-4' />),
              S.divider(),
              S.documentTypeListItem('homePage')
                .title('Página de Inicio')
                .icon(() => <BookOpen className='size-4' />)
            ])
        ),
      S.listItem()
        .title('Comercio')
        .icon(() => <BadgeEuro className='size-4' />)
        .child(
          S.list()
            .title('Productos & Ventas')
            .items([
              S.documentTypeListItem('product')
                .title('Productos')
                .icon(() => <ShoppingBasket className='size-4' />),
              S.documentTypeListItem('productCategory')
                .title('Categorías')
                .icon(() => <Filter className='size-4' />),
              S.documentTypeListItem('coupon')
                .title('Cupones')
                .icon(() => <BadgeEuro className='size-4' />),
              S.divider(),
              S.documentTypeListItem('costumer')
                .title('Clientes')
                .icon(() => <User className='size-4' />),
              S.documentTypeListItem('order')
                .title('Ordenes de Compra')
                .icon(() => <CircleDollarSign className='size-4' />),
              S.documentTypeListItem('abandonedCart')
                .title('Carritos de Compra')
                .icon(() => <BaggageClaim className='size-4' />),
              S.documentTypeListItem('wishlistType')
                .title('Listas de Deseos')
                .icon(() => <Heart className='size-4' />),
              S.documentTypeListItem('noStockNotifyMe')
                .title('No Stock Notificarme')
                .icon(() => <Bell className='size-4' />),
              S.divider(),
              S.documentTypeListItem('productDesigns')
                .title('Diseño de Productos')
                .icon(() => <Paintbrush className='size-4' />),
              S.documentTypeListItem('formats')
                .title('Formatos de Diseños')
                .icon(() => <BarChart className='size-4' />),
              S.divider(),
              S.listItem()
                .title('Configuración de Envío')
                .icon(() => <Truck className='size-4' />)
                .child(S.document().schemaType('shipping'))
            ])
        ),
      S.listItem()
        .title('Funciones')
        .icon(() => <Sparkle className='size-4' />)
        .child(S.documentTypeList('featureFlags').title('Funciones'))
    ])
