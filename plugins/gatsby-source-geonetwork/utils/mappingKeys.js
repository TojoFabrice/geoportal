const { isArray } = require("./helpers")

function asBoolean(value) {
  // console.log("asBoolean in = " + value)
  value = asString(value).toLowerCase()
  let res = false
  if (value === true) res = true
  if (value == true) res = true
  if (value == "y") res = true
  if (value == "yes") res = true
  // console.log("asBoolean out = " + res)
  return res
}

function asString(value) {
  // If Array return only the first element
  if (isArray(value)) value = value.shift()
  return value || ""
}

function asArray(value) {
  if (!isArray(value)) value = [value]
  return value || []
}

/**
 * Get normailsed data type
 *
 *  - dataset
 *  - map
 *  - opendata
 *
 * @param {*} record Metadata record
 */
function getType(record) {
  const types = asArray(record.type)
  const keywords = asArray(record.keyword)
    .filter(Boolean)
    .map((k) => k.toLowerCase())

  const opendataKeys = [
    "opendata",
    "open data",
    "donnees ouvertes",
    "données ouvertes",
  ]

  const mapKeys = ["map", "service"]

  // opendata : by keywords / tags
  if (opendataKeys.some((k) => keywords.includes(k))) {
    return "opendata"
  }

  // map: by type
  if (mapKeys.some((k) => types.includes(k))) {
    return "map"
  }

  // dataset by default
  return "dataset"
}

module.exports = function mapping(data) {
  let dataMapped = []

  if (!data.metadata) {
    console.log("Enable to map catalog data")
    return dataMapped
  }

  data.metadata.map((r) => {
    // console.log(r.type);
    // TODO add schema

    let links = asArray(r.link)
    links = links.map((link) => {
      if (!link || link == "") return []
      const [name, description, url, protocol, mimetype, status] =
        link.split("|")

      return {
        name: name || description,
        description: description || name,
        onlineResource: url,
        protocol: protocol,
        mimetype: mimetype,
      }
    })

    let responsibleParties = asArray(r.responsibleParty)
    responsibleParties = responsibleParties.map((d) => {
      if (!d || d == "") return []
      const [role, type, name, email] = d.split("|")

      return {
        role: role,
        type: type,
        name: name,
        email: email,
      }
    })

    // Bounding box, add a default one if not present
    let geoBox = asString(r.geoBox)
    if (geoBox == "") geoBox = "-180|-90|180|90"
    geoBox = geoBox.split("|").map(parseFloat)

    // Keep only first image (thumbnail / overview ...)
    let image = asString(r.image)
    if (image != "") image = image.split("|")[1]

    let i = r["geonet:info"] || {}
    let rec = {
      uuid: asString(i.uuid),
      type: getType(r),
      title: asString(r.title),
      abstract: asString(r.abstract),
      lineage: asString(r.lineage),
      creationDate: asString(r.creationDate),
      revisionDate: asString(r.revisionDate),
      created: asString(i.createDate),
      modified: asString(i.changeDate),
      denominator: asString(r.denominator),
      resolution: asString(r.resolution),
      geoBox: geoBox,
      geoDesc: asString(r.geoDesc),

      url: image,
      logo: asString(r.logo),

      topicCat: asArray(r.topicCat),
      keyword: asArray(r.keyword),

      link: links,
      responsibleParty: responsibleParties,

      legalConstraints: asArray(r.legalConstraints),
      source: asString(r.source),
      updateFrequency: asString(r.updateFrequency),
      isHarvested: asBoolean(r.isHarvested),
      published: asArray(r.publishedForGroup),
      valid: asBoolean(r.valid),
    }

    dataMapped.push(rec)
  })

  return dataMapped
}
