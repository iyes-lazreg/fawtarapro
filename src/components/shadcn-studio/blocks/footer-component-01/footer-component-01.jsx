import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'


const Footer = () => {
  return (
    <footer>
      <div
        className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='#'>
          <div className='flex items-center gap-3'>
            <img src="/logo2.png"  className='gap-3 w-10 h-auto' />
          </div>
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          <a href='#'>à propos</a>
          <a href='#'>Caractéristiques</a>
          <a href='#'>témoignages</a>
          <a href='#'>prix</a>
        </div>

        <div className='flex items-center gap-4'>
          <a href='https://www.facebook.com/profile.php?id=615845543216499' target="_blank">
            <FacebookIcon className='size-5' />
          </a>
          
        </div>
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} <a href='/'>Fawtara Pro</a>, Made with ❤️ By<a href='https://www.facebook.com/iyess.lazreg.3386/' target="_blank"> Iyes Lazreg</a> 
        </p>
      </div>
    </footer>
  );
}

export default Footer
