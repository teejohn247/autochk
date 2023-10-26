import Image from 'next/image'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'

export type PageProps = {
  params: {[key: string]: string | string[] | undefined};
  searchParams: {[key: string]: string | string[] | undefined};
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home(props: PageProps) {


  return (
    <div>
      <Banner/>
      <Products {...props} />
    </div>
  )
}
