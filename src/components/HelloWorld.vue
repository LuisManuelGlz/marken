<template>
  <div class="container">
    <input
      type="file"
      ref="markdownFile"
      hidden
      accept=".md"
      @change="readMarkdownFile"
    />
    <button
      ref="uploadMarkdown"
      class="uploadMarkdown"
      @click="clickMarkdownFileInput"
    >
      Upload file
    </button>
    <textarea v-model="textInput" class="textInput"></textarea>
    <div v-html="markdownViewer" class="markdownViewer"></div>
    <!-- <button v-if="textInput" class="downloadMarkdown">Download</button> -->
  </div>
</template>

<script>
import Vue from "vue";
import { marked } from "marked";

export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      textInput: "# hello world",
      markdownFile: null,
    };
  },
  computed: {
    markdownViewer() {
      return marked(this.textInput);
    },
  },
  methods: {
    clickMarkdownFileInput() {
      this.$refs.markdownFile.click();
    },
    readMarkdownFile() {
      this.markdownFile = this.$refs.markdownFile.files[0];

      if (this.markdownFile.name.includes(".md")) {
        console.log("hola");
        const reader = new FileReader();

        reader.onload = (response) => {
          this.textInput = response.target.result;
        };

        reader.onerror = (error) => console.log(error);

        reader.readAsText(this.markdownFile);
      }

      this.$refs.markdownFile.value = "";
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "uploadMarkdown markdownViewer"
    "textInput markdownViewer"
    "textInput downloadMarkdown";
  gap: 10px;
  padding: 20px;
  height: 80vh;
}

.uploadMarkdown {
  grid-area: uploadMarkdown;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #42b983;
  color: #f0f0f0;

  &:hover {
    background: #6eca9f;
  }
}

.textInput {
  grid-area: textInput;
  padding: 20px;
  resize: none;
  border-radius: 15px;
  border: none;
  background: #f0f0f0;
  outline: none;
}

.markdownViewer {
  grid-area: markdownViewer;
  overflow-y: scroll;
}

.downloadMarkdown {
  grid-area: downloadMarkdown;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #42b983;
  color: #f0f0f0;

  &:hover {
    background: #6eca9f;
  }
}
</style>
