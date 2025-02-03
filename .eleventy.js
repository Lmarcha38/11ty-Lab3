
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blogpost", function(title, description, time, post) {
    return `<div class="blogpost">
      <div class="blog_title">${title}</div>
      <div class="blog_desc">${description}</div>
      <div class="blog_time">${time}</div>
      <div class="blog_post">${post}</div>
    </div>`
  })
};