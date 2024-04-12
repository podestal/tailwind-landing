import React from 'react'
import anisha from '../imgs/avatar-anisha.png'
import ali from '../imgs/avatar-ali.png'
import richard from '../imgs/avatar-richard.png'
import shanai from '../imgs/avatar-shanai.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        {/* Container to heading and testimonials block */}
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            {/* Heading */}
            <h2 className='text-4xl font-bold text-center'>
                What is the difference about Manage?
            </h2>
            {/* Testimonials container */}
            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                {/* Testiomonial 1 */}
                <div className='flex flex-col my-10 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img className='w-16 -mt-14' src={anisha} alt="" />
                    <h5 className='text-lg font-bold'>Anisha Li</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>
                {/* Testiomonial 2 */}
                <div className='flex flex-col my-10 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img className='w-16 -mt-14' src={ali} alt="" />
                    <h5 className='text-lg font-bold'>Ali Bravo</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “We have been able to cancel so many other subscriptions since
                        using Manage. There is no more cross-channel confusion and
                        everyone is much more focused.”
                    </p>
                </div>
                {/* Testiomonial 3 */}
                <div className='flex flex-col  my-10 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img className='w-16 -mt-14' src={richard} alt="" />
                    <h5 className='text-lg font-bold'>Richard Watts</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>
            </div>
            {/* Button */}
            <div className='flex justify-center'>
                <p className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonials