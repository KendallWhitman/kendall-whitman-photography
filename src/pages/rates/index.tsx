import React from "react"
import { Layout } from '../../components'
import { ratesData } from '../../data'
import './styles.scss'

const RatesPage = () => (
  <Layout constrained>
    <div className='table'>
      {ratesData?.map(({ title, rates }) => (
        <div key={title}>
          <h3 className='table__title'>{title}</h3>
          <div className='table__wrapper'>
            {rates?.map((rate: any, i: number) => (
              <ul className='table__list' key={i}>
                {Object.values(rate)?.map((item: string) => (
                  <li className='table__item' key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default RatesPage
