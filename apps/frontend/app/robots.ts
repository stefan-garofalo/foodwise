export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      ...(process.env.NO_INDEX
        ? {
            index: false,
            follow: false,
          }
        : {}),
    },
  }
}
