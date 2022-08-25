import * as React from 'react'
import { EditPage, RichTextField, TextField, AnyFileRepeater } from '@contember/admin'

export default () => (
    <EditPage entity="Article(id = $id)" rendererProps={{ title: 'Edit Article' }}>
        <TextField field="title" label="Title" />
        <RichTextField field="content" label="Content" />
        <AnyFileRepeater field="files" label="Any upload" urlField="file.url" orderBy="order" />
    </EditPage>
)
