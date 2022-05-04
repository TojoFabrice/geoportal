const urlErrorMessage = "Url-Error. Please require a valid Url."
const endpointParams = "q?fast=index&_content_type=json"

module.exports = (env, url) => {
  if (!url) {
    console.log(urlErrorMessage)
    return
  }

  if (typeof url === "string") return url + endpointParams
  const URL =
    env === "production"
      ? url.production + endpointParams
      : url.development + endpointParams
  if (URL) return URL
  console.log(urlErrorMessage)
}
