<template>
  <div>
    <h1>
      Storage Test
    </h1>
    <div class="container">
      <div v-if="movieUrl" class="player-container">
        <vue-core-video-player :src="movieUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'

export default {
  middleware: ['testMiddleware'],
  data () {
    return {
      movieUrl: ''
    }
  },
  async created () {
    const storage = getStorage()
    const imagesRef = ref(storage, 'movies')

    let moviePath = ''
    await listAll(imagesRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // eslint-disable-next-line no-console
          console.log(folderRef)
        })
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          moviePath = itemRef.fullPath
        })
      })
      .catch(() => {
        // Uh-oh, an error occurred!
      })
    // eslint-disable-next-line no-console
    console.log(moviePath)
    const movieRef = ref(storage, moviePath)
    // eslint-disable-next-line no-console
    console.log(movieRef)

    await getDownloadURL(movieRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        // eslint-disable-next-line no-console
        console.log(url)
        this.movieUrl = url
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break
        }
      })
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 600px;
}
</style>
