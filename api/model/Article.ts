import { SchemaDefinition as def } from '@contember/schema-definition'
import { Image } from './Image'

export class Article {
  title = def.stringColumn()
  content = def.stringColumn()
  baz = def.stringColumn()
  files = def.manyHasOne(Image).setNullOnDelete()
}
