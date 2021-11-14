
import { computed } from 'vue';
import { useRouter } from'vue-router';
import { useStore } from 'vuex';

export default {
    props: { news: Object },
    setup () {
        const store = useStore();
        const router = useRouter();
        const news = computed(() => store.getters['news/getSelectedNews']);
        const goBack = () => {
            router.back()
        }
        return { news, goBack }
    }
}