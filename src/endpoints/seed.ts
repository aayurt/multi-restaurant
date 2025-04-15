// import payload from 'payload'

// const seed = async () => {
//   // fetch your documents
//   const docs = await fetch('/next/seed', { method: 'POST', credentials: 'include' }).then((res) =>
//     res.json(),
//   )

//   const promises = docs.map(async (doc) => {
//     await payload.create({
//       collection: 'docs',
//       data: doc,
//     })
//   })

//   await Promise.all(promises)

//   process.exit(0)
// }

// seed()
