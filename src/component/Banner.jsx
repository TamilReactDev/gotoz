import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React, { Suspense, useRef } from 'react'
import Cap from './Cap';




const Banner = () => {

	const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
	const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
	const ref = useRef();
    const resizeConfig = {
        scroll: false,
        debounce: {
            scroll: 50,
            resize: 0,
        },
    };

	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-2">
				<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
					<div 
					initial={{ opacity: 0, y: 100 }}
        			whileInView={{ opacity: 1, y: 50}}
        			transition={{ duration: 1 }}
        			ref={imageRef} className="lg:order-last lg:h-full  justify-items-center">
						<div className="iphone-x">
                                        <div className="screen">
                                            <Cap />
                                        </div>
                                        <i></i>
                                        <b></b>
                                        <s></s>
                                        <span></span>
                                        <span></span>
                                    </div>
					</div>

					<motion.div 
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						ref={textRef} className="lg:py-24">
						<h2 className="text-3xl font-bold text-black sm:text-4xl">
							See the World Differently with AR Innovation
						</h2>

						<p className="mt-4 text-black">
							AR operates in real-time, meaning the digital enhancements respond to the user's movements and changes in the environment. This real-time interaction is essential for creating a seamless experience.
						</p>

						<a
							href="#"
							className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
						>
							Get Started Today
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner
