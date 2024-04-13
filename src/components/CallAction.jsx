import React from 'react'

const CallAction = () => {
  return (
    // CTA Section
    <section id='cta' className='bg-brightRed mt-8'>
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/* Heading */}
            <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
                Simplify your team works today
            </h2>
            {/* Button */}
            <div className='flex justify-center'>
                <p className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-100">Get Started</p>
            </div>
        </div>
    </section>
  )
}

export default CallAction