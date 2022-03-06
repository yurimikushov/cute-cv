import { CracoConfig, when, whenProd } from '@craco/craco'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import includes from 'lodash/includes'

const whenBundleAnalyzing = <T>(cb: () => T) => {
  return when(Boolean(process.env.BUNDLE_ANALYZING), cb)
}

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
      plugins: [
        ...(whenBundleAnalyzing(() => [new BundleAnalyzerPlugin()]) ?? []),
      ],
    },
  },
}

export default config
