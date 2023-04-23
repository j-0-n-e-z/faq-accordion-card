import { useState } from 'react'
import { faq } from './faq-data'
import React from 'react'

export default function App() {
	const [selectedFaqItemIdx, setSelectedFaqItemIdx] = useState<
		number | undefined
	>(1)

	function handleFaqItemClick(idx: number) {
		if (idx === selectedFaqItemIdx) {
			setSelectedFaqItemIdx(undefined)
		} else {
			setSelectedFaqItemIdx(idx)
		}
	}

	return (
		<main className='w-full min-h-screen grid place-items-center bg-gradient-to-b from-softViolet to-softBlue'>
			<article className='flex lg:flex-row flex-col lg:w-[920px] w-[88%] lg:h-[510px] bg-white lg:ml-10 lg:mt-0 mt-16 rounded-3xl card-shadow'>
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
						<div className='w-max h-max absolute -left-[83px] top-[70px]'>
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
				<div className='font-["Kumbh_Sans"] lg:w-1/2 lg:pt-[60px] pt-5 lg:px-4 px-6'>
					<h2 className='text-veryDarkDesaturatedBlue text-[32px] font-bold lg:text-start text-center'>
						FAQ
					</h2>
					<ul className='lg:w-4/5 lg:mt-8 mt-6 [&>:first-child>h3]:pt-0'>
						{faq.map((faqItem, idx) => (
							<React.Fragment key={faqItem.question}>
								<li
									className='cursor-pointer'
									onClick={() => handleFaqItemClick(idx)}
								>
									<h3
										className={`flex items-center lg:text-sm text-[13px] text-veryDarkDesaturatedBlue ${
											idx === selectedFaqItemIdx
												? 'font-bold pb-2 lg:pt-[15px] pt-4'
												: 'font-normal lg:py-[15px] py-4'
										}`}
									>
										<span>{faqItem.question}</span>
										<span
											className={`ml-auto mr-2 ${
												idx === selectedFaqItemIdx && 'scale-y-[-1]'
											}`}
										>
											<img
												src='./assets/images/icon-arrow-down.svg'
												alt='arrow-down'
											/>
										</span>
									</h3>
									{idx === selectedFaqItemIdx && (
										<p className='text-[12px] pb-4 w-11/12 text-veryDarkGrayishBlue'>
											{faqItem.answer}
										</p>
									)}
								</li>
								<hr
									className={`bg-lightGrayishBlue ${
										idx === faq.length - 1 && 'lg:hidden block lg:mb-0 mb-12'
									}`}
								/>
							</React.Fragment>
						))}
					</ul>
				</div>
			</article>
		</main>
	)
}
