export interface Slide {
    id: string
    slideName: string
    type: string
    content: ContentItem
    slidOrder: number 
    className?: string
}

export type ContentType = 
    | 'column'
    | 'resizable-column'
    | 'text'
    | 'paragraph'
    | 'image'
    | 'table'
    | 'multiColumn'
    | 'blank'
    | 'imageAndText'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'title'
    | 'heading4'
    | 'table'
    | 'blockquote'
    | 'numberedList'
    | 'bulletedList'
    | 'code'
    | 'link'
    | 'quote'
    | 'divider'
    | 'calloutBox'
    | 'todolist'
    | 'bulletList'
    | 'codeBlock'
    | 'customButton'
    | 'table'
    | 'tableOfContents'



export interface ContentItem {
    id: string
    type: ContentType
    name: string 
    content: ContentItem[] | string | string[] | string[][]
    initialRows?: Number
    initialColumns?: Number
    restrictToDrop?: boolean
    columns?: Number
    placeholder: string
    className: string
    alt?: string
    callOutType?: 'success' | 'warning' | 'info' | 'question' | 'caution'
    link?: string
    code?: string
    language?: string
    bgColor?: string
    isTransparent?: boolean
}