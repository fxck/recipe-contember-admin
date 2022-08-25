import * as React from 'react'
import { CreatePage, RichTextField, TextField, AnyFileRepeater } from '@contember/admin'

export default () => (
  <CreatePage
    entity="Article"
    rendererProps={{ title: 'Create Article' }}
    redirectOnSuccess="articleEdit(id: $entity.id)"
  >
    <TextField field="title" label="Title" />
    <RichTextField field="content" label="Content" />
    <AnyFileRepeater field="files" label="Any upload" urlField="file.url" orderBy="order" />
  </CreatePage>
)
