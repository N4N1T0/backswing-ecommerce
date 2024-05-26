'use client'

import { Twitter, Facebook, Linkedin } from 'lucide-react'

const SocialShareButton = ({ title }: { title: string }) => {
	const encodedUrl = window.location.href
	const encodedTitle = encodeURIComponent(title)

	const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
	const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
	const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`

	return (
		<div className='flex space-x-4 mt-4 items-center'>
			<p className='text-gray-700 inline-block uppercase'>Comparte en:</p>
			<a
				href={twitterShareUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300'
			>
				<Twitter className='w-6 h-6' />
			</a>
			<a
				href={facebookShareUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300'
			>
				<Facebook className='w-6 h-6' />
			</a>
			<a
				href={linkedinShareUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300'
			>
				<Linkedin className='w-6 h-6' />
			</a>
		</div>
	)
}

export default SocialShareButton