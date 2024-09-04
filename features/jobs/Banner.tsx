import React from 'react'

const bg = 'https://assets.lbctrl.com/uploads/66944006-30cf-464c-b535-ba4c2246b400/whale-job.png'
const JobBanner: React.FC = () => {
  return (
    <section className="relative flex flex-col items-start justify-center h-44 bg-bg_color_2">
      <div className="w-full main-container">
        <div className="text-4xl font-semibold main-content-width">Join Us</div>
      </div>
      {/* <img src={bg} alt="job-bg" className="absolute top-0 bottom-0 right-0" /> */}
    </section>
  )
}

export default JobBanner
