Rails.application.configure do
  # Reload code on every request in development
  config.cache_classes = false
  config.eager_load = false

  # Show full error reports
  config.consider_all_requests_local = true

  # Disable caching in development
  config.action_controller.perform_caching = false

  # Enable live asset compilation
  config.assets.debug = true
  config.assets.digest = false
  config.assets.quiet = false
  config.assets.compile = true

  # Use evented file watcher for better change detection
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker
end