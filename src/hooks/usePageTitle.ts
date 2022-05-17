import { useLocation } from '@reach/router'
import { navData } from '../data'

const usePageTitle = () => {
  const { pathname } = useLocation()
  const page = navData.filter(item => item.url === pathname)

  return page[0] ? page[0].label : ''
}

export default usePageTitle;
