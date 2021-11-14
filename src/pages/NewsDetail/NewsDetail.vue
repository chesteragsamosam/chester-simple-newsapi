<template>
    <div v-if="news != null">
        <div class="header">
            <img class="thumbnail" :src="news.urlToImage">
        </div>
        <div class="contents">
            <h1>{{ news.title }}</h1>
            <h2 v-if="news.source.name"> Source: {{ news.source.name }}</h2>
            <h4>by: {{ news.author || 'Unknown' }}</h4>
            <p>{{ news.description }} <a v-if="news.url" :href="news.url" class="">Visit page</a></p>
            
        </div>
        <button class="btn" @click="goBack()">Back</button>
    </div>
    <div v-else>No data to show</div>
</template>

<script src="./NewsDetail.js">

<style lang="less" src="./NewsDetail.less" scoped />