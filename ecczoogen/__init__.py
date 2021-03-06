import sys
import logging
import colorlog

def setup_logging(level=logging.INFO):
    # You should use colorlog >= 6.0.0a4
    handler = colorlog.StreamHandler()
    handler.setFormatter( colorlog.LevelFormatter(
        log_colors={
            "DEBUG": "white",
            "INFO": "",
            "WARNING": "red",
            "ERROR": "bold_red",
            "CRITICAL": "bold_red",
        },
        fmt={
            # emojis we can use: ๐ ๐ ๐จ ๐ฆ โ๏ธ ๐งจ ๐งน โ๏ธโโผ๏ธ โ๏ธ โ ๏ธ โน๏ธ โก๏ธ โ๏ธ ใฐ๏ธ
            # ๐ถ ๐ญ ๐ฃ ๐ โณ ๐ง ๐ฉ โจ ๐ฅ ๐ฅ ๐ข ๐
            "DEBUG":    "%(log_color)sใฐ๏ธ    %(message)s", #'  [%(name)s]'
            "INFO":     "%(log_color)sโจ  %(message)s",
            "WARNING":  "%(log_color)sโ ๏ธ   %(message)s", # (%(module)s:%(lineno)d)",
            "ERROR":    "%(log_color)s๐จ  %(message)s", # (%(module)s:%(lineno)d)",
            "CRITICAL": "%(log_color)s๐จ  %(message)s", # (%(module)s:%(lineno)d)",
        },
        stream=sys.stderr
    ) )

    root = colorlog.getLogger()
    root.addHandler(handler)

    root.setLevel(level)
