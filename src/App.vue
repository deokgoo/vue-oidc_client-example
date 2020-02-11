<template>
  <div id="app">
    <div id="nav">
      <router-link to="/auth/base">base</router-link> |
      <router-link to="/auth/code">code</router-link> |
      <router-link to="/auth/implicit">implicit</router-link>
    </div>
    <router-view/>
  </div>
</template>
