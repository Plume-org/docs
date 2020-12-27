# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

set :relative_links, true

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, :with_toc_data => true

activate :syntax

activate :directory_indexes

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  # activate :minify_css
  # activate :minify_javascript
end

DEFAULT_LANGUAGE = "en"

helpers do
  def link_to_lang(name, code, **opts)
    base = code == DEFAULT_LANGUAGE ? "/" : "/#{code}/"
    path = base + current_page.path
                    .sub(/index\.html\z/, "")
                    .sub(%r|\.html\z|, "/")
    link_to(h(name), path, hreflang: h(code), rel: "alternate")
  end
end

def URI.escape(*args)
  encode_www_form_component(*args)
end
