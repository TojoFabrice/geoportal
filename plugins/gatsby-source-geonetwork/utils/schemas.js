const schema = {
  metadata: `
    uuid: String
    type: String
    title: String
    abstract: String
    lineage: String
    creationDate: String
    revisionDate: String
    created: String
    modified: String
    denominator: String
    resolution: String
    geoBox: [Float]
    geoDesc: String

    url: String
    logo: String

    topicCat: [String]
    keyword: [String]

    link: [metadata_links]
    responsibleParty: [metadata_responsibleParties]

    legalConstraints: [String]
    source: String
    updateFrequency: String
    isHarvested: Boolean
    published: [String]
    valid: Boolean   
  `,
  metadata_links: `
    name: String
    description: String
    onlineResource: String
    protocol: String
    mimetype: String
  `,
  metadata_responsibleParties: `
    role: String
    type: String
    name: String
    email: String
  `,
}

module.exports = schema
