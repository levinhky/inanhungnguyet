import Image from 'next/image'

type Params = {
    params : {
        slug: string
    }
}

export default function ProductDetail({ params }: Params ) {
    return (
       <>
        <h1>My Page {params.slug} </h1>
        <Image src="/icons/search.svg" alt="me" width="20" height="200" />
        </>
    )
  } 