import './section.scss'
import DownArrow from '../../assets/down-arrow.svg'
import  Fade from 'react-reveal/Fade'

const Section = (props) => {
   return (
      <div className="wrapper">
         <div className='bg-cover'>
            <img src={ props.backgroundImg } alt="backgroundImg" />
         </div>

         <section className='section'> 
            <Fade bottom>
               <div className="item-text">
                  <h1>{ props.title }</h1>
                  <p>{ props.description }</p>
               </div>   
            </Fade>


            <div className="buttons">
               <Fade bottom>
                  <div className="btn-group">
                     <button className='left-btn'>
                           { props.leftBtnText }
                     </button>

                     { props.rightBtnText &&
                        <button className='right-btn'>
                        { props.rightBtnText }
                        </button>
                     }
                  </div>
               </Fade>

               <img src={ DownArrow } alt="" className='down-arrow'/>
            </div>
            
         </section>
      </div>

   )
}



export default Section