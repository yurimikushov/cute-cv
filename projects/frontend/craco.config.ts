import { CracoConfig, whenProd } from '@craco/craco'
import includes from 'lodash/includes'

const willBeDynamicallyImported = ['html2pdf']

const config: CracoConfig = {
  webpack: {
    configure: {
      ...whenProd(() => ({
        optimization: {
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/u,
                name: 'vendor',
                chunks({ name }) {
                  if (includes(willBeDynamicallyImported, name)) {
                    return false
                  }

                  return true
                },
              },
            },
          },
        },
      })),
    },
  },
}

export default config
