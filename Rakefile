require "pathname"

BUILD_DIR = Pathname("build")
LOCALE_DIR = Pathname("trans")
TRANS_DIR = Pathname("translate")
PSEUDO_LANG = "ach"

CROWDIN_SNIPPET = <<EOS

    <script type="text/javascript">
      var _jipt = [];
      _jipt.push(['project', 'plume-docs']);
      _jipt.push(['escape', function() {
        window.location.href = 'https://joinplu.me';
      }]);
    </script>
    <script type="text/javascript" src="//cdn.crowdin.com/jipt/jipt.js"></script>
EOS

class Pathname
  alias to_str to_s
end

desc "Run all tasks"
task :all => ["crowdin:upload", :wait_trans_updated, :deploy, :deploy_trans]

task :wait_trans_updated do
  sleep 30
end

desc "Build site"
task :build_site => [:build_base, "crowdin:download"] do
  LOCALE_DIR.glob("**/*.html").each do |html|
    dest = Pathname(html.to_path.sub(%r|#{LOCALE_DIR}/([^/]+)/trans|, "#{BUILD_DIR}/\\1"))
    next if dest.file?
    dest.parent.mkpath
    copy html, dest
  end
end

task :build_base do
  sh "bundle", "exec", "middleman", "build"
end

desc "Build site for translate.docs.joinplu.me"
task :build_trans => "crowdin:download" do
  sh "bundle", "exec", "middleman", "build", "--build-dir", TRANS_DIR

  (LOCALE_DIR/PSEUDO_LANG/"trans").glob("**/*.html").each do |html|
    doc = html.read
    doc.sub! "<head>", "<head>" + CROWDIN_SNIPPET
    dest = Pathname(html.to_path.sub(LOCALE_DIR/PSEUDO_LANG/"trans", TRANS_DIR))
    $stderr.puts "#{html} -> #{dest}"
    dest.write doc
  end
end

task :build_trans_src do
  sh "bundle", "exec", "middleman", "build", "--build-dir", LOCALE_DIR
end

desc "Deploy docs.joinplue.me"
task :deploy => :build_site do
  sh "netlify", "deploy", "--site", "40419055-f669-42be-8d07-0c1dcc0dc24b", "--dir", BUILD_DIR, "--prod"
end

desc "Deploy translate.docs.joinplue.me"
task :deploy_trans => :build_trans do
  sh "netlify", "deploy", "--site", "2b1e232b-ac98-4680-9ab4-6d4eee0d84cb", "--dir", TRANS_DIR, "--prod"
end

namespace :crowdin do
  desc "Download translations"
  task :download => :build_trans_src do
    sh "crowdin", "download"
  end

  desc "Upload translation sources"
  task :upload => :build_trans_src do
    sh "crowdin", "upload", "sources"
  end

  task :download_pseudo do
    sh "crowdin", "download", "--pseudo"
  end
end
