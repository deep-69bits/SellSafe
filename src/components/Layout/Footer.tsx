import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-5'>

      <div className='lg:flex block justify-between px-10 py-10'>
        <div className='flex flex-col gap-y-4'>

          <div className='flex flex-col gap-y-2'>
            <h3 className='text-[#664BFB] text-[24px] font-semibold'>Follow us on</h3>
            <h5 className='flex items-center gap-x-1'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.002 9C10.3446 9 9.00195 10.3431 9.00195 12C9.00195 13.6573 10.3451 15 12.002 15C13.6593 15 15.002 13.6569 15.002 12C15.002 10.3427 13.6589 9 12.002 9ZM12.002 7C14.7624 7 17.002 9.2371 17.002 12C17.002 14.7605 14.7649 17 12.002 17C9.24148 17 7.00195 14.7629 7.00195 12C7.00195 9.23953 9.23905 7 12.002 7ZM18.502 6.74915C18.502 7.43926 17.9412 7.99917 17.252 7.99917C16.5619 7.99917 16.002 7.4384 16.002 6.74915C16.002 6.0599 16.5627 5.5 17.252 5.5C17.9403 5.49913 18.502 6.0599 18.502 6.74915ZM12.002 4C9.52747 4 9.12415 4.00655 7.97324 4.0578C7.18912 4.09461 6.6635 4.20007 6.17513 4.38967C5.74113 4.55799 5.42806 4.75898 5.09449 5.09255C4.75964 5.4274 4.55901 5.73963 4.39137 6.17383C4.20133 6.66332 4.0959 7.18811 4.05975 7.97115C4.008 9.0752 4.00195 9.46105 4.00195 12C4.00195 14.4745 4.0085 14.8778 4.05974 16.0286C4.09657 16.8124 4.20217 17.3388 4.39131 17.826C4.56007 18.2606 4.76147 18.5744 5.09343 18.9064C5.4296 19.2421 5.74276 19.4434 6.17284 19.6094C6.66716 19.8005 7.19245 19.9061 7.97309 19.9422C9.07715 19.9939 9.463 20 12.002 20C14.4765 20 14.8798 19.9934 16.0306 19.9422C16.8127 19.9055 17.3395 19.7996 17.828 19.6106C18.2614 19.4423 18.5762 19.2402 18.9084 18.9085C19.2446 18.5718 19.4455 18.2594 19.6117 17.8283C19.8023 17.3358 19.9081 16.8098 19.9442 16.0289C19.9959 14.9248 20.002 14.5389 20.002 12C20.002 9.52552 19.9954 9.12221 19.9442 7.97137C19.9074 7.18906 19.8015 6.66149 19.6123 6.17318C19.4444 5.74038 19.2427 5.42635 18.9094 5.09255C18.574 4.75715 18.2626 4.55693 17.8281 4.38942C17.339 4.19954 16.8134 4.09396 16.0308 4.05781C14.9268 4.00605 14.5409 4 12.002 4ZM12.002 2C14.7186 2 15.0578 2.01 16.1245 2.06C17.1886 2.10917 17.9145 2.2775 18.552 2.525C19.2111 2.77917 19.7678 3.1225 20.3236 3.67833C20.8786 4.23417 21.222 4.7925 21.477 5.45C21.7236 6.08667 21.892 6.81333 21.942 7.8775C21.9895 8.94417 22.002 9.28333 22.002 12C22.002 14.7167 21.992 15.0558 21.942 16.1225C21.8928 17.1867 21.7236 17.9125 21.477 18.55C21.2228 19.2092 20.8786 19.7658 20.3236 20.3217C19.7678 20.8767 19.2086 21.22 18.552 21.475C17.9145 21.7217 17.1886 21.89 16.1245 21.94C15.0578 21.9875 14.7186 22 12.002 22C9.28528 22 8.94611 21.99 7.87945 21.94C6.81528 21.8908 6.09028 21.7217 5.45195 21.475C4.79361 21.2208 4.23611 20.8767 3.68028 20.3217C3.12445 19.7658 2.78195 19.2067 2.52695 18.55C2.27945 17.9125 2.11195 17.1867 2.06195 16.1225C2.01445 15.0558 2.00195 14.7167 2.00195 12C2.00195 9.28333 2.01195 8.94417 2.06195 7.8775C2.11111 6.8125 2.27945 6.0875 2.52695 5.45C2.78111 4.79167 3.12445 4.23417 3.68028 3.67833C4.23611 3.1225 4.79445 2.78 5.45195 2.525C6.08945 2.2775 6.81445 2.11 7.87945 2.06C8.94611 2.0125 9.28528 2 12.002 2Z" fill="black" />
              </svg>
              <span className='text-[20px] font-medium'>Instagram</span>
            </h5>
            <h5 className='flex items-center gap-x-1'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.002 19.9381C16.9483 19.446 20.002 16.0796 20.002 12C20.002 7.58172 16.4203 4 12.002 4C7.58367 4 4.00195 7.58172 4.00195 12C4.00195 16.0796 7.05564 19.446 11.002 19.9381V14H9.00195V12H11.002V10.3458C11.002 9.00855 11.1412 8.52362 11.4027 8.03473C11.6641 7.54584 12.0478 7.16216 12.5367 6.9007C12.9194 6.69604 13.3941 6.57252 14.2237 6.51954C14.5529 6.49851 14.9791 6.52533 15.502 6.6V8.5H15.002C14.0847 8.5 13.7062 8.54332 13.4799 8.66433C13.3396 8.73939 13.2414 8.83758 13.1663 8.97793C13.0453 9.20418 13.002 9.42853 13.002 10.3458V12H15.502L15.002 14H13.002V19.9381ZM12.002 22C6.4791 22 2.00195 17.5228 2.00195 12C2.00195 6.47715 6.4791 2 12.002 2C17.5248 2 22.002 6.47715 22.002 12C22.002 17.5228 17.5248 22 12.002 22Z" fill="black" />
              </svg>
              <span className='text-[20px] font-medium'>Facebook</span>
            </h5>
            <h5 className='flex items-center gap-x-1'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="black" />
              </svg>
              <span className='text-[20px] font-medium'>Twitter</span>
            </h5>
          </div>

          <div className='flex flex-col gap-y-2'>
          <h3 className='text-[#664BFB] text-[24px] font-semibold'>Categories</h3>
          <span className='text-[20px] font-medium'>Electronics</span>
          <span className='text-[20px] font-medium'>TV and Appliances</span>
          <span className='text-[20px] font-medium'>Furniture</span>
          <span className='text-[20px] font-medium'>E Sports</span>
          <span className='text-[20px] font-medium'>Gym & Sports Equipment</span>
          <span className='text-[20px] font-medium'>Child Care</span>
          <span className='text-[20px] font-medium'>Musical Instrument</span>
          </div>

          <div className='flex flex-col gap-y-2'>
          <h3 className='text-[#664BFB] text-[24px] font-semibold'>Company</h3>
          <span className='text-[20px] font-medium'>Why SellSafe</span>
          <span className='text-[20px] font-medium'>Overview</span>
          <span className='text-[20px] font-medium'>Becho Befikar</span>
          </div>



        </div>

        <div className=' p-5 bg-purple-100 rounded-2xl'>
          <Image className='absolute translate-x-[550px] translate-y-20 ' width={180} height={200} src="/Images/MobilePhone.png" alt='Mobile Phone' />
          <video className='w-[800px] ' src='/Videos/advideo.mp4' autoPlay loop />
          <div className='flex justify-between items-center'>
            <div className='flex flex-row mt-4'>
              <Image src={'/Images/GooglePlay.png'} width={192} height={68} alt='Google Play Button' />
              <Image src={'/Images/AppStore.png'} width={192} height={68} alt='Google Play Button' />
            </div>
            <div className='text-[#664BFB] text-[24px] font-[700]'>Download The App now!</div>
          </div>
        </div>

      </div>

      <div className='flex justify-between  bg-opacity-10 bg-purple-100  w-full'>
        <span>© 2022 SellSafe. All Rights Reserved.</span>
        <span className='flex items-center'>
          Made with
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" >
            <path d="M12 20.1192C0.0656999 15.7388 -1.33279 6.42567 0.866813 2.66972C2.38505 0.077537 5.88847 -0.531369 8.75686 1.10029C8.76021 1.10225 8.76407 1.10415 8.76749 1.10656C8.79407 1.12155 8.82109 1.137 8.84767 1.15289C8.85153 1.15485 8.85539 1.15725 8.85925 1.15966C10.1066 1.89609 11.2264 3.0613 12 4.67707C14.1441 0.200639 18.9441 -0.818756 21.7473 1.15966C22.2983 1.54838 22.772 2.05304 23.1332 2.66967C25.3328 6.42567 23.9343 15.7388 12 20.1192Z" fill="#EE596B" />
            <path d="M12 20.1192C0.0656999 15.7388 -1.33279 6.42567 0.866813 2.66972C2.38505 0.077537 5.88847 -0.531369 8.75686 1.10029C5.73728 -0.559906 1.08862 6.15877 4.74883 11.6235C7.58968 15.8651 12 20.1192 12 20.1192Z" fill="#ED3A4F" />
          </svg>
          in India.
        </span>
      </div>

    </div>
  )
}

export default Footer