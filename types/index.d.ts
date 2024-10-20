export type PostMetaData={
    title?:string,
    summary?:string,
    auther?:string,
    publishedAt?:string,
    slug?:string,
    image?:string,
}

export type PostProps={
    metaData:PostMetaDatam,
    content:string
}
export type ProjectProps={
    metaData:ProjectMetaData,
    content:string
}
export type ProjectMetaData={
    title?:string,
    summary?:string,
    author?:string,
    publishedAt?:string,
    slug:string,
    image?:string,
}
