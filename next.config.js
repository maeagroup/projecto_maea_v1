/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações básicas
  trailingSlash: false,
  
  // Configurações experimentais
  experimental: {
    serverComponentsExternalPackages: ['@material-tailwind/react'],
    optimizePackageImports: ['@heroicons/react'],
  },
  
  // Configurações de imagem
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maea.ao",
      },
      {
        protocol: "https",
        hostname: "www.maea.ao",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configurações de TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configurações de ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configurações de compressão
  compress: false,
  
  // Configurações de otimização
  swcMinify: false,
  
  // Configurações do Webpack
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Desabilitar cache durante desenvolvimento
      config.cache = {
        type: 'memory'
      };
    }
    return config;
  },
  
  // Configurações de produção
  poweredByHeader: false,
  
  // Configurações de build - pasta personalizada
  distDir: 'build',
  
  // Configurações de página
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Configurações de asset - configurado para domínio maea.ao
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://maea.ao' : '',
  
  // Configurações de base path
  basePath: '',
  
  // Configurações de domínio e ambiente
  env: {
    CUSTOM_KEY: process.env.NODE_ENV === 'production' ? 'maea.ao' : 'localhost',
  },
  
  // Configurações de segurança - modificadas para resolver erro 403
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Host',
            value: 'maea.ao',
          },
        ],
      },
    ];
  },
  
  // Configurações de webpack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Configurações específicas para evitar problemas de build
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  
  // Configurações de redirecionamento para domínio
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.maea.ao',
          },
        ],
        destination: 'https://maea.ao/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
