import { SchemaDefinition as def } from '@contember/schema-definition'
import { Image } from './Image'

export class Article {
  title = def.stringColumn()
  content = def.stringColumn()
  image = def.oneHasOne(Image).setNullOnDelete()
}
