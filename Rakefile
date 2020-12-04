require "pathname"

BUILD_DIR = "build"
TRANS_DIR = "trans"
LOCALE_DIR = "locale"

task :default => [:build_trans, "crowdin:upload", :build_site]

desc "Build site"
multitask :build_site => [:build_base, "crowdin:download"] do
  Pathname.glob("#{LOCALE_DIR}/**/*.html").select(&:file?).each do |path|
    content = path.read
    content.sub! /<script type="text\/javascript" src="\/\/cdn.crowdin.com\/jipt\/jipt.js"><\/script>/, ""
    dest = Pathname(path.to_path.sub(LOCALE_DIR, BUILD_DIR).sub(TRANS_DIR, ""))
    $stderr.puts "copy #{path} -> #{dest}"
    dest.parent.mkpath
    dest.write content
  end
end

task :build_base do
  sh "middleman", "build"
end

desc "Build translation sources"
task :build_trans do
  env = {"CROWDIN" => "on"}
  sh env, "middleman", "build", "--build-dir", TRANS_DIR
end

namespace :crowdin do
  desc "Download translations"
  task :download do
    sh "crowdin", "download"
  end

  desc "Upload translation sources"
  task :upload do
    sh "crowdin", "upload", "sources"
  end
end
