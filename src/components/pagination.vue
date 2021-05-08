<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- pre -->
      <li class="page-item" :class="{'disabled': !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="changePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{'active': pages.current_page === page}">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <!-- next -->
      <li class="page-item" :class="{'disabled': !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="changePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'], // 透過props將外層資料page傳進來
  data () {
    return {}
  },
  methods: {
    changePage (page) {
      this.$emit('emitPages', page) // 觸發內層changePage => 觸發外層emitPages => 觸發最終所需methods
    }
  }
}
</script>
