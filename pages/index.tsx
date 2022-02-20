import Image from 'next/image'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Background from '@/public/images/Background.png'
import BackgroundMobile from '@/public/images/BackgroundMobile.png'

const IndexPage = () => (
  <>
    <div
      className='fixed h-screen w-screen overflow-hidden'
      style={{ zIndex: -1 }}
    >
      <div className='hidden sm:flex'>
        <Image
          alt='Background'
          src={Background}
          placeholder='blur'
          layout='fill'
          // objectFit='cover'
          quality={100}
          priority
        />
      </div>
      <div className='flex sm:hidden'>
        <Image
          alt='Background Mobile'
          src={BackgroundMobile}
          placeholder='blur'
          layout='fill'
          // objectFit='cover'
          quality={100}
          priority
        />
      </div>
    </div>
    <div className='min-h-screen'>
      <div className='flex justify-center items-center max-w-screen-lg m-auto pt-40 md:pt-20'>
        <Card />
      </div>
      <Footer />
    </div>
  </>
)

export default IndexPage
