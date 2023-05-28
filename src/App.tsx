import { useEffect, useState } from 'react'
import { faqs } from './faqs-data'

export default function App() {
	const [openedFaqIdx, setOpenedFaqIdx] = useState<number | undefined>(1)
	const [accordionHeights, setAccordionHeights] = useState<number[]>([])

	useEffect(() => {
		const accordions = document.querySelectorAll('.accordion')
		setAccordionHeights([...accordions].map(element => element.scrollHeight))
	}, [openedFaqIdx])

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
					<ul className='lg:w-4/5 lg:mt-8 mt-6 [&>:first-child>div]:pt-0'>
						{faqs.map((faq, faqIdx) => (
							<li
								key={faq.question}
								className={`cursor-pointer ${
									faqIdx === faqs.length - 1 ? 'mb-12' : 'mb-0'
								}`}
								onClick={() =>
									setOpenedFaqIdx(faqIdx === openedFaqIdx ? undefined : faqIdx)
								}
							>
								<div
									className={`flex items-center lg:text-sm text-[13px] text-veryDarkDesaturatedBlue transition hover:text-softRed lg:pt-[15px] py-4 ${
										faqIdx === openedFaqIdx ? 'font-bold' : 'font-normal'
									}`}
								>
									<span className=''>{faq.question}</span>
									<img
										className={`ml-auto mr-2 transition-transform duration-200 ${
											faqIdx === openedFaqIdx ? 'rotate-180' : ''
										}`}
										src='./assets/images/icon-arrow-down.svg'
										alt='arrow-down'
									/>
								</div>
								<p
									className={`accordion overflow-hidden duration-500 transition-[height] text-[12px] w-11/12 text-veryDarkGrayishBlue`}
									style={{
										height:
											faqIdx === openedFaqIdx
												? `${accordionHeights[faqIdx] + 16}px`
												: '0',
									}}
								>
									{faq.answer}
								</p>
								<hr className='bg-lightGrayishBlue' />
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}
