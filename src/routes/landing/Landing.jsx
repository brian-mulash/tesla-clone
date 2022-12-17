import React from 'react'
import './landing.scss'
import {Section} from '../../components'

import model_s from '../../assets/model-s.jpg'
import model_y from '../../assets/model-y.jpg'
import model_3 from '../../assets/model-3.jpg'
import model_x from '../../assets/model-x.jpg'
import solar_panel from '../../assets/solar-panel.jpg'
import solar_roof from '../../assets/solar-roof.jpg'
import access from '../../assets/accessories.jpg'

const Landing = () => {
   return (
      <div className='landing-page'>
         <Section 
            title='Model S'
            description='Order Online for Touchless Delivery'
            backgroundImg={model_s}
            leftBtnText = 'custom order'
            rightBtnText = 'existing inventory'
         />
         <Section 
            title='Model Y'
            description='Order Online for Touchless Delivery'
            backgroundImg={model_y}
            leftBtnText='custom order'
            rightBtnText='existing inventory'
         />
         <Section 
            title='Model 3'
            description='Order Online for Touchless Delivery'
            backgroundImg={model_3}
            leftBtnText='custom order'
            rightBtnText='existing inventory'
         />
         <Section 
            title='Model X'
            description='Order Online for Touchless Delivery'
            backgroundImg={model_x}
            leftBtnText='custom order'
            rightBtnText='existing inventory'
         />
         <Section 
            title='Lowest Cost Solar Panels in the World'
            description='Money-back guarantee'
            backgroundImg={solar_panel}
            leftBtnText='order now'
            rightBtnText='learn more'
         />
         <Section 
            title='Solar for New Roofs'
            description='Solar Roofs Costs Less than New Roofs and Solar Panels'
            backgroundImg={solar_roof}
            leftBtnText='order now'
            rightBtnText='learn more'
         />

         <Section 
            title='Accessories'
            description=''
            backgroundImg={access}
            leftBtnText='order now'
         />

      </div>
   )
}

export default Landing
