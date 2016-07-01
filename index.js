module.exports = {
    blocks: {
      toc: {
        process: function(block) {
          var book = this;
          return book.readFileAsString("SUMMARY.md")
            .then(function(content) {
              return book.renderBlock('markdown', content);
            });
        }
      }
    },
};
