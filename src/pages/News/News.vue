<template>
  
    <div>
        <div class="news-topbar">
            <form @submit.prevent="handleSubmit">
                <input type="search" v-model="formData.q" placeholder="Search">
                <select class="capitalize" v-model="formData.category">
                    <option :value="null">All Categories</option>
                    <option v-for="c in listOfCategories" :value="c">{{ c }}</option>
                </select>
                <select v-model="formData.country">
                    <option :value="null">All Countries</option>
                    <option v-for="c in listOfCountries" :value="c">{{ c.toUpperCase() }}</option>
                </select>
            
                <button class="btn" type="submit">Search</button>
            </form>
        </div>
        <!-- {{ news.length }} in {{ totalResults }} -->
          <div v-if="loading" class="loading">
            <div>&nbsp</div>
        </div>
        <div v-else class="news-container">
            <NewsItem v-for="(newsItem, idx) in news" :key="idx" class="newsItem" :news="newsItem" />
            <Pagination :options="{hideCount: true}" v-model="formData.page" :records="totalResults" :per-page="formData.pageSize" @paginate="paginate"/>
        </div>
    </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import NewsItem from '../../components/NewsItem/NewsItem.vue'
import Pagination from 'v-pagination-3';

    export default {
        components: { NewsItem, Pagination },
        setup() {
            const loading = ref(true);
            const store = useStore();
            const listOfCategories = ref(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']);
            const listOfCountries = ref(['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']);
            const news = computed(() => store.getters['news/getNews']);
            const totalResults = computed(() => store.getters['news/getTotalResults']);
            const formData = reactive({
                q: '',
                category: null,
                country: null,
                page: 1,
                pageSize: 18
            });
            const search = async () => {
                loading.value = true
                if (!(formData.q || formData.country || formData.category)) formData.category = 'technology'
                await store.dispatch('news/fetchHeadlines', formData)
                loading.value = false
            }
            const handleSubmit = async () => {
                formData.page = 1;
                await search()
            };
            const page = ref(1);
            const paginate = async _page => {
                formData.page = _page;
                search();
            };
            const fetchData = async () => {
                await search()
            };
            fetchData();
            return {
                handleSubmit,
                news,
                totalResults,
                formData,
                listOfCategories,
                listOfCountries,
                paginate,
                page,
                loading
            }
        },
    }
</script>

<style lang="less" scoped src="./News.less"/>