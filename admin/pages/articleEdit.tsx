import * as React from 'react'
import { EditPage, RichTextField, TextField, ImageUploadField } from '@contember/admin'

export default () => (
    <EditPage entity="Article(id = $id)" rendererProps={{ title: 'Edit Article' }}>
        <TextField field="title" label="Title" />
        <RichTextField field="content" label="Content" />
        <ImageUploadField urlField="image.url" label="Image upload" />
    </EditPage>
)
