<template>
  <div class="error-page m-5">
    <hr class="my-5">
    <!-- Si hay error -->
    <div v-if="errorMessage">

      <!-- Si hay codigo de error -->
      <h1 class="my-5">Error</h1>

      <!-- Si hay parámetros de ruta -->
   <!--   <div v-if="err.routeParams">
        <h2>Query Params:</h2>
        <ul class="list-unstyled">
          <li v-for="(val, key) in err.routeParams" :key="key">
            👉 {{ key.toUpperCase() }}: <span class="lead text-muted">{{ val }}</span>
          </li>
        </ul>

        <hr class="my-5">
      </div>-->

      <!-- Si hay mensaje de error -->
      <div v-if="errorMessage">
        <p class="lead"> {{ errorMessage }}</p>
      </div>

    </div>

    <!-- Si NO hay error -->
    <div v-else>
      <h1 class="my-5">Error Page</h1>
      <p class="lead">What are you doing here? 🤔</p>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ErrorView',
  computed: {
    ...mapState('oauth', ['errorMessage']),
  }
}
</script>