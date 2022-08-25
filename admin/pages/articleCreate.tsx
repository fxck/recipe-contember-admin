import * as React from 'react'
import { CreatePage, RichTextField, TextField, ImageUploadField } from '@contember/admin'

export default () => (
  <CreatePage
    entity="Article"
    rendererProps={{ title: 'Create Article' }}
    redirectOnSuccess="articleEdit(id: $entity.id)"
  >
    <TextField field="title" label="Title" />
    <RichTextField field="content" label="Content" />
    <ImageUploadField urlField="image.url" label="Image upload" />
  </CreatePage>
)
