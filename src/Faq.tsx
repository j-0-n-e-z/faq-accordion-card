import { FC } from 'react'
import { SlideDown } from 'react-slidedown'
import { Faq as IFaq } from './faqs-data'

interface FaqProps {
	faq: IFaq
	isOpened: boolean
	toggle: Function
}

export const Faq: FC<FaqProps> = ({ faq, isOpened, toggle }) => {
	return (
		<li key={faq.id} className='cursor-pointer' onClick={() => toggle()}>
			<div
				className={`flex items-center lg:text-sm text-[13px] text-veryDarkDesaturatedBlue hover:text-softRed lg:pt-[15px] py-4`}
			>
				<p className={isOpened ? 'font-bold' : 'font-normal'}>{faq.question}</p>
				<img
					className={`ml-auto mr-2 transition-transform duration-200 ${
						isOpened ? 'rotate-180' : ''
					}`}
					src='./assets/images/icon-arrow-down.svg'
					alt='arrow-down'
				/>
			</div>
			<SlideDown
				closed={!isOpened}
				transitionOnAppear={false}
				className='faq-answer'
			>
				<p className='duration-500 text-[12px] w-11/12 text-veryDarkGrayishBlue mb-4'>
					{faq.answer}
				</p>
			</SlideDown>
			<hr className='bg-lightGrayishBlue' />
		</li>
	)
}
