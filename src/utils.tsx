export function getBaseUrl() {
  return process.env.PROJECT_URL || ""
}

export function getAbsoluteUrl(url: String) {
  const baseUrl = getBaseUrl()
  if (!url) return baseUrl

  return baseUrl + url
}

const utils = {
  getBaseUrl,
  getAbsoluteUrl,
}

export default utils
