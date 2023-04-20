import { useState } from 'react'
import { faq } from './faq-data'

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
			<article className='flex w-[920px] h-[510px] bg-white ml-10 rounded-3xl card-shadow'>
				<section className='w-1/2 h-full relative'>
					<div className='h-full w-full relative overflow-hidden z-0'>
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
					<div className='absolute -left-[93px] top-[40%] z-10'>
						<img src='./assets/images/illustration-box-desktop.svg' alt='box' />
					</div>
				</section>
				<section className='font-["Kumbh_Sans"] w-1/2 pt-[60px] px-4'>
					<h2 className='text-veryDarkDesaturatedBlue text-[32px] font-bold'>
						FAQ
					</h2>
					<ul className='w-4/5 mt-8 [&>:first-child>h3]:pt-0'>
						{faq.map((faqItem, idx) => (
							<li
								key={faqItem.question}
								className='cursor-pointer'
								onClick={() => handleFaqItemClick(idx)}
							>
								<h3
									className={`flex items-center text-sm text-veryDarkDesaturatedBlue ${
										idx === selectedFaqItemIdx
											? 'font-bold pb-2 pt-[15px]'
											: 'font-normal py-[15px]'
									}`}
								>
									<span>{faqItem.question}</span>
									<div
										className={`ml-auto mr-2 ${
											idx === selectedFaqItemIdx && 'scale-y-[-1]'
										}`}
									>
										<img
											src='./assets/images/icon-arrow-down.svg'
											alt='arrow-down'
										/>
									</div>
								</h3>
								{idx === selectedFaqItemIdx && (
									<p className='text-[12px] pb-4 text-veryDarkGrayishBlue'>
										{faqItem.answer}
									</p>
								)}
								{idx !== faq.length - 1 && (
									<hr className='bg-lightGrayishBlue' />
								)}
							</li>
						))}
					</ul>
				</section>
			</article>
		</main>
	)
}
