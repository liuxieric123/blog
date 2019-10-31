<template>
  <div class="list-view">
    <div
      v-if="filteredList.length === 0"
      class="empty-list"
    >
      Ooops! Nothing here..🙈
    </div>
    <ol
      v-else
      class="list"
    >
      <li
        v-for="page of filteredList"
        :key="page.key"
        class="list-item"
        v-if="page.path!='/'"
      >
        <router-link
          :to="page.path"
          class="item-title"
        >
          <span>{{ page.frontmatter.titile }} | </span>
          <span class="item-date">{{page.frontmatter.date.slice(0,10)}}</span>
          <br/>
          <div v-html="page.excerpt" class="item-intro"></div>
        </router-link>   
      </li>
    </ol>
  </div>
</template>

<script>
export default {
    computed: {
        filteredList() {
        // Order by publish date, desc
            return this.$site.pages.filter(function (item) {
                if (item.title)
                    return true
                return false
            }).sort(function(item1, item2) {
                return (new Date(item2.frontmatter.date) - new Date(item1.frontmatter.date))
            })
        }
    },
}
</script>