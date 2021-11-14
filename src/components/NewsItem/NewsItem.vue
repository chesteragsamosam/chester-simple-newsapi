<template>
<div class="news-item--wrapper">
    <div class="news-item--card">
        <div class="news-item--header">
            <img class="thumbnail" :src="news.urlToImage" alt="">
        </div>
        <div class="news-item--body">
            <h3>{{ news.title }}</h3>
            <div class="text-gray">
                <div><b>{{ news.source.name }}</b></div>
                <div>{{ news.author }}</div>
            </div>
            <div class="description">
                <p>{{ news.description }}</p>
            </div>
            <div class="news-item--actions">
                <button @click="titleClicked()" class="btn">Info</button>
            </div>
        </div>
        <div class="news-item--footer">
            <span>Published: {{ dateFormat(news.publishedAt) }}</span>
        </div>
    </div>

</div>
</template>

<script src="./NewsItem.js" />

<style src="./NewsItem.less" lang="less" scoped />