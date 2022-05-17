import React from "react"
import { Layout } from '../../components'
import { ratesData } from '../../data'
import './styles.scss'

const RatesPage = () => (
  <Layout constrained>
    <div className='table'>
      {ratesData?.map(({ title, rates }) => (
        <>
          <h3 className='table__title'>{title}</h3>
          <div className='table__wrapper'>
            {rates?.map((rate: any) => (
              <ul className='table__list'>
                {Object.values(rate)?.map((item: string) => (
                  <li className='table__item'>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </>
      ))}
    </div>
  </Layout>
)

export default RatesPage
