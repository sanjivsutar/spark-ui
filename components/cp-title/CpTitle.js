import React from 'react'

const CpTitle = ({ title, 
  subtitle, 
  description, 
  icon,
  variant}) => {
  return (
    <div>
        {
            title && 
                <>
                    <h2 className='text-bold'>{title}</h2>
                    {
                        variant === 'border' && 
                        <div className="title-border bg-title-gradient"></div>
                    }
                </>
        }
        {
            subtitle && 
            <>
                <h3 className='text-medium'>{subtitle}</h3> 
            </>
        }
        {
            description && <p className='text-regular'>{description}</p>
        }
    </div>
  )
}

export default CpTitle;