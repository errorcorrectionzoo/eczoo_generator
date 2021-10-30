import functools
import logging
import sys
import os
import os.path
logger = logging.getLogger(__name__)

import http.server

try_extensions = ('.html', '.js', '.css', '.json', '.png', '.jpg', '.jpeg',)


class AutoFilenameExtensionsHttpRequestHandler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):

        logger.debug(f"Handling request for {self.path} ...")

        if not self.path or self.path == '/':
            return super().do_GET()

        local_fs_path = self.translate_path(self.path)

        found_ext = None
        if not os.path.exists(local_fs_path):
            for try_ext in try_extensions:
                try_path = self.path+try_ext
                logger.debug(f"trying {try_ext} → {try_path} ...")
                if os.path.exists(self.translate_path(try_path)):
                    self.path = try_path
                    break
            else:
                self.send_error(http.server.HTTPStatus.NOT_FOUND,
                                f"File not found, tried extensions {try_extensions}")
                return None
        
        return super().do_GET()



def serve(website_dir, host, port):
    
    HandlerClass = functools.partial(
        AutoFilenameExtensionsHttpRequestHandler,
        directory=website_dir
    )

    with http.server.HTTPServer( (host, port), HandlerClass) as httpd:
        host, port = httpd.socket.getsockname()[:2]
        url_host = f'[{host}]' if ':' in host else host
        logger.info(
            f"Serving HTTP on {host} port {port} "
            f"→→→ http://{url_host}:{port}/ ←←← ..."
        )
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            logger.info("Keyboard interrupt received, exiting.")
            sys.exit(0)
