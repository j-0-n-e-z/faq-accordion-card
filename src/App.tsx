import { useState } from 'react'
import { Faq } from './Faq'
import { faqs } from './faqs-data'

export default function App() {
	const [openedFaqId, setOpenedFaqId] = useState<number | undefined>(
		faqs[1].id
	)

	function toggleFaq(faqId: number) {
		if (faqId === openedFaqId) {
			setOpenedFaqId(undefined)
		} else {
			setOpenedFaqId(faqId)
		}
	}

	return (
		<main className='w-full min-h-screen grid place-items-center bg-gradient-to-b from-softViolet to-softBlue'>
			<section className='flex lg:flex-row flex-col lg:w-[920px] w-[88%] lg:h-[510px] bg-white lg:ml-10 lg:mt-0 mt-16 rounded-3xl card-shadow'>
				<div className='lg:w-1/2 h-full relative'>
					<div className='flex relative justify-center h-28 w-full lg:hidden bg-mobile bg-no-repeat bg-mobilePosition'>
						<div className='absolute -top-[108px] w-60'>
							<img
								src='./assets/images/illustration-woman-online-mobile.svg'
								alt='illustration'
							/>
						</div>
					</div>
					<div className='h-full w-full relative overflow-hidden z-0 lg:block hidden'>
						<div className='w-max h-max absolute right-[70px] -top-[295px]'>
							<img
								src='./assets/images/bg-pattern-desktop.svg'
								alt='bg-desktop'
							/>
						</div>
						<div className='absolute -left-[83px] top-[70px]'>
							<img
								src='./assets/images/illustration-woman-online-desktop.svg'
								alt='illustration'
							/>
						</div>
					</div>
					<div className='absolute -left-[93px] top-[40%] z-10 lg:block hidden'>
						<img src='./assets/images/illustration-box-desktop.svg' alt='box' />
					</div>
				</div>
				<div className='font-KumbhSans lg:w-1/2 lg:pt-[60px] pt-5 lg:px-4 px-6'>
					<h1 className='text-veryDarkDesaturatedBlue text-[32px] font-bold lg:text-start text-center'>
						FAQ
					</h1>
					<ul className='lg:w-4/5 lg:mt-8 mt-6 [&>:first-child>div]:pt-0 mb-12'>
						{faqs.map(faq => (
							<Faq
								key={faq.id}
								faq={faq}
								isOpened={faq.id === openedFaqId}
								toggle={() => toggleFaq(faq.id)}
							/>
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}
