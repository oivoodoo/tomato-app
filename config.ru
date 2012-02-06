require 'rack/offline'
require './server'

map '/' do
  run Sinatra::Application
end

map '/application.manifest' do
  offline = Rack::Offline.new :cache => true, :root => "public" do
    ["images/*", "lib/*", "src/*", "src/models/*",
      "src/models/enemies/*", "src/base/*", "styles/*"].each do |folder|

      Dir[File.join(settings.public_folder, folder)].each do |file|
        cache file.sub(File.join(settings.public_folder, ""), "")
      end
    end
    network '/'
  end

  run offline
end
