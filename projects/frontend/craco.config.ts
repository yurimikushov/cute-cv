import { CracoConfig, when, whenProd } from '@craco/craco'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import includes from 'lodash/includes'

const whenBundleAnalyzing = <T>(cb: () => T) => {
  return when(Boolean(process.env.BUNDLE_ANALYZING), cb)
}

const dynamicImports = ['html2pdf']
const isDynamicImport = (name: string) => includes(dynamicImports, name)

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
                  return !isDynamicImport(name)
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
