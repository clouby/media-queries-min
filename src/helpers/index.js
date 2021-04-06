import { factoryComponents } from './../components/MediaQuery'
import { factoryHooks } from './../hooks/useMediaQuery'

export function generateLibs(template = 'default') {
  return {
    useMediaQuery: factoryHooks(template),
    MediaQuery: factoryComponents(template)
  }
}
