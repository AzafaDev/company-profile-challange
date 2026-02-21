import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// Kita gunakan any untuk source agar tidak bentrok dengan deklarasi tipe yang hilang
export const urlFor = (source: any) => {
  return imageBuilder.image(source).auto('format').fit('max')
}