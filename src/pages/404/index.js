import React from 'react'
import { Layout, Seo } from '../../components'
import './styles.scss';

const NotFoundPage = () => (
  <Layout constrained>
    <Seo title="404: Not found" />
    <h1 className='headline-404'>404: Not Found</h1>
    <p className='text-404'>Wh- What are you doing here? There aren't any photos here. Well, unless a blank white screen is a photo. Enjoy I guess?</p>
  </Layout>
)

export default NotFoundPage
