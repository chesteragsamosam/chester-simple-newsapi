
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { toRefs } from 'vue'
    export default {
        props: {
            news: Object
        },
        setup(props) {
            const router = useRouter()
            const route = useRoute()
            const store = useStore()
            const { news } = toRefs(props)
            const dateFormat = date => (new Date(date).toLocaleDateString())
            const slugUrl = title => {
                return title.split(' ').join('-')
            }
            const titleClicked = () => {
                store.dispatch('news/fethNewsDetail', news.value)
                router.push(slugUrl(news.value.title))
            }
            return {
                news,
                dateFormat,
                slugUrl,
                titleClicked
            }
        }
    }