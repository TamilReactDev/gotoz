import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const HeroSection = () => {
    const { ref: img1, inView: image1InView } = useInView({ triggerOnce: true });
	const { ref: qrimg, inView: qrImgInView } = useInView({ triggerOnce: true });

    

    return (
        <>
            <section className="text-black">
                <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex  lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-clip-text bg-black text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Understanding AR.

                            <span className="sm:block text-2xl mt-2">Enhancing the Real World with Digital Innovation. </span>
                        </h1>

                        <p className="mx-auto mt-4  sm:text-xl/relaxed">
                            Augmented Reality (AR) is a technology that overlays digital information, such as images, videos, or 3D models, onto the real-world environment in real-time.
                        </p>
                    </div>
                </div>
                <section className='p-4'>
                    <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:gap-8">
                        <motion.div
                            ref={img1}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: image1InView ? 1 : 0, y: image1InView ? 50 : 100 }}
                            transition={{ duration: 1 }}
                            class="relative h-96  overflow-hidden bg-cover bg-no-repeat flex justify-center">
                            <img
                                src="ar.png"
                                class="rounded-lg transition ro object-contain duration-300 ease-in-out hover:scale-110"
                                alt="Louvre" />
                        </motion.div>
                        
                        <motion.div ref={qrimg} initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: image1InView ? 1 : 0, y: qrImgInView ? 50 : 100 }}
                            transition={{ duration: 1 }} className="h-96 flex justify-center items-center">
                            <img src='ar-code.png' className='h-full rounded-lg object-contain' alt="qrimg" />
                        </motion.div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default HeroSection
