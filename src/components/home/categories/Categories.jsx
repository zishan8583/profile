
import { Link } from 'react-router-dom'
import { services } from '../../../assets/data'
import './categories.css'




const Categories = () => {
  return (
    <div className='categoriesContainer' >
      <h2 className='lightTitle'>Our Services</h2>
      <div className='row justify-content-center'>
        {/* categoriesList */}
        {
          services.map((service, index) => (
            <div className='category col-lg-2 col-sm-12 col-md-2 '>
              <Link to={'/service'}>
                <div className='imageContainer'>
                  <img src={service.img} className='img' />
                </div>
              </Link>


              <div className='name'>{service.title}</div>
            </div>

          ))

        }

      </div>
    </div>
  )
}

export default Categories