import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collection) => {
  const error = ref(null)
  const documents = ref([])

  projectFirestore
    .collection(collection)
    .orderBy('createdAt')
    .onSnapshot((snap) => {
      let results = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        documents.value = results
        error.value = null
      })
    }, (err) => {
      console.error(err.message)
      error.value = "获取数据失败"
      documents.value = []
    }
    )

  return { error, documents }
}

export default getCollection
